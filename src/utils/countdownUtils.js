const CAPE_TOWN_TZ = 'Africa/Johannesburg'
const UNLOCK_HOUR = 10

function getDublinTime() {
  const dublinTime = new Date().toLocaleString('en-US', { timeZone: CAPE_TOWN_TZ })
  return new Date(dublinTime)
}

function getUnlockDate(contentDate, unlockHour = UNLOCK_HOUR) {
  const date = new Date(contentDate)
  date.setHours(unlockHour, 0, 0, 0)
  return date
}

function formatTimeRemaining(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  if (days > 0) {
    return `${days}D ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
  }
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function calculateSlotData(contentData, testMode = false) {
  const now = getDublinTime()
  const slots = contentData.doors.map((door, index) => {
    const day = index + 1
    const unlockDate = getUnlockDate(door.date, door.unlockHour)

    let state = 'locked'
    let countdown = undefined
    let still = undefined

    if (testMode) {
      state = 'cleared'
      still = door.still || undefined
    } else if (now >= unlockDate) {
      state = 'cleared'
      still = door.still || undefined
    } else {
      state = index === 0 || now >= getUnlockDate(contentData.doors[index - 1]) ? 'ready' : 'locked'

      if (state === 'locked' || state === 'ready') {
        const msUntilUnlock = unlockDate - now
        countdown = formatTimeRemaining(msUntilUnlock)
      }
    }

    return {
      day,
      state,
      countdown,
      still,
      doorData: door,
    }
  })

  const clearedCount = slots.filter((s) => s.state === 'cleared').length

  return {
    slots,
    clearedCount,
  }
}

export function getTimeToBirthday(contentData) {
  const now = getDublinTime()
  const lastDoor = contentData.doors[contentData.doors.length - 1]
  const birthdayDate = new Date(lastDoor.date)
  birthdayDate.setHours(UNLOCK_HOUR, 0, 0, 0)

  const msUntil = birthdayDate - now
  if (msUntil <= 0) {
    return 'Happy Birthday!'
  }

  const totalSeconds = Math.floor(msUntil / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)

  return `${days}D ${String(hours).padStart(2, '0')}:00`
}

export function getNextCartridgeTime(slots) {
  const nextLocked = slots.find((s) => s.state === 'locked' || s.state === 'ready')
  if (!nextLocked) {
    return 'Now!'
  }
  return nextLocked.countdown || '00:00:00'
}

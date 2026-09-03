# Bennie's 30th Countdown

A special countdown page with eight doors, one unlocking each day until Bennie's 30th birthday.

## How it works

- **Eight doors:** One for each day from 3-10 September 2026
- **Auto-unlock:** Doors unlock automatically at 18:00 Dublin time
- **Content types:** Videos, text (like "thirty things"), and photo galleries
- **Countdown:** Locked doors show how long until they unlock
- **Gallery autoplay:** Photo albums auto-play with 3-second intervals

## How to update content

All content lives in `content.json`. To update:

1. Open `content.json`
2. Find the door you want to update (day 1-8)
3. Update the fields:
   - `text`: Your message/words for that day
   - `videoLink`: Google Drive embed link (see below)
   - `items`: For "thirty things" day (list of one-liners)
   - `photos`: For gallery day (array of photos with captions)

4. Save and commit:
   ```
   git add content.json
   git commit -m "Update day X content"
   git push
   ```

Netlify will auto-deploy within seconds.

## Video links (Google Drive)

1. Upload video to Google Drive
2. Right-click → Share → "Anyone with the link"
3. Copy the file ID from the URL: `https://drive.google.com/file/d/**FILE_ID**/view`
4. Use this format in content.json:
   ```
   "videoLink": "https://drive.google.com/file/d/FILE_ID/preview"
   ```

## Photo links (Google Photos or Drive)

For galleries:
1. Upload to Google Drive
2. Right-click → Share → "Anyone with the link"  
3. Copy the file ID
4. Use this format:
   ```
   "url": "https://drive.google.com/uc?export=view&id=FILE_ID"
   ```

## Local testing

Open `index.html` in your browser. The page will show:
- Unlocked doors if the time has passed
- Locked doors with countdown if the time hasn't yet arrived

Unlocking happens automatically based on Dublin time (UTC+1).

## Deployment

This repo is deployed to Netlify. Any push to `main` auto-deploys.

**Note:** Test any changes locally first, then push to deploy live.

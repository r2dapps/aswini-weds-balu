
# 💍 Aswini & Balu - Wedding Save The Date Invitation 💖

Welcome to the official source code for the interactive **Save the Date** webpage celebrating the wedding of Aswini & Balu! This project features elegant design, smooth animations, and fun effects for a memorable digital invite experience.



## 🎨 Styling & Fonts

### Fonts used:
- **Great Vibes** (Google Fonts) — romantic cursive font for main titles like couple names and “Save the Date”  
- **Lora** (Google Fonts) — classic serif for body text and details  

Modify fonts by updating the `<link>` tags in `index.html` and adjusting CSS font-family rules:

```css
.save-title, .couple-names {
  font-family: 'Great Vibes', cursive;
}

body, p, .date, .venue, .countdown {
  font-family: 'Lora', serif;
}
````

---

## 🌈 Colors & Gradients

* Background uses a soft floral pastel gradient: `linear-gradient(135deg, #fbb1bd, #bdebe0);`
* The card has a subtle pastel pink gradient with inner shadows for a glowing halo effect
* Text colors are warm browns and roses (#6b4e3d, #e27382) for an elegant vibe
* Borders and frames use pastel rose (#eaa5b2)

Adjust colors in the `style.css` file under `.background-gradient`, `.wedding-card`, `.card-inner`, and text classes.

---

## 📐 Layout & Sizing

* Card width max: 400px; responsive to 90% width on smaller devices
* Couple image max height: \~260px; adjust via `.couple-img` class
* Text sizes set in rem units; tweak `.save-title`, `.couple-names`, `.date`, `.venue`, and `.countdown` for font size changes

---

## 💫 Emoji Galaxy & Floating Effects

* Emojis float upward continuously with random sizes and horizontal positions
* Customize floating emojis in `script.js` by editing the `emojiList` array:

```js
const emojiList = ['💖', '🌸', '✨', '🌟', '💫', '❤️', '💍', '🎉', '🌹', '💐', '🥂', '🍾', '🎶'];
```

Add your favorites for more sparkle and love!

---

## 🎉 Confetti Effect

* Confetti bursts upward from the bottom center every 10 seconds for celebratory bursts
* Confetti parameters can be modified inside the `burstConfetti()` function in `script.js`:

```js
function burstConfetti() {
  confetti({ particleCount: 100, spread: 70, origin: { x:0.5, y:0.2 } });
}
```

---

## 🎵 Background Music with Toggle

* Music auto-plays when page is focused, paused otherwise (due to browser restrictions)
* Play/pause controlled by a small transparent circular button at the bottom-right corner
* Replace the default music by updating `assets/music.mp3` or changing the `<audio>` source in `index.html`

---

## ⏳ Countdown Timer

* Counts down to the wedding date/time: **July 27, 2025, 11:00 AM** local time
* Change target date/time in `script.js` here:

```js
const weddingDate = new Date("2025-07-27T11:00:00");
```

---

## 🛠️ How to Customize

### Replace Images

* Put your own images in the `assets` folder:

  * `couple.png` — the couple's photo with transparent background
  * `card-bg.png` — optional background for the card

### Update Text

* Edit text content inside the `.card-text-layer` div in `index.html`:

  * Couple names
  * Date and time
  * Venue location

### Adjust Tilt Sensitivity

* Change `maxTilt` or multiplier values in `script.js` tilt handlers to increase/decrease tilt effect intensity

### Modify Emojis

* Edit the `emojiList` array in `script.js` to add/remove floating emojis

### Tweak Confetti

* Adjust particle count, spread, or origin in `burstConfetti()` function in `script.js`

### Change Fonts or Colors

* Edit font-family and color properties in `style.css`

### Background Music

* Replace `assets/music.mp3` with your own audio file

---

## 🚀 Deployment

1. Push the project folder to a GitHub repository
2. Enable **GitHub Pages** on the `main` (or `master`) branch
3. Access your invite live at:
   `https://<your-github-username>.github.io/<repo-name>/`

---

## 🎊 Enjoy & Share

This digital invitation is perfect for sharing with family and friends.
Feel free to open issues or send pull requests to improve it!

---

## 💐 Emoji Love Overflow

Feel free to add or swap these emojis in the floating galaxy or texts:

```
💖 🌸 ✨ 🌟 💫 ❤️ 💍 🎉 🌹 💐 🥂 🍾 🎶 🕊️ 💌 🕯️ 🎀 💎 🌈 🦋 🌷 🌻 🍃 🎇
```

---

Made with ❤️ & 20 years of dev experience!
Your Web Dev Bro 💻🔥

---

# Quick Setup Summary

1. **Fonts:** Modify Google Fonts links and CSS font-family
2. **Colors:** Adjust gradients and colors in CSS
3. **Images:** Replace `couple.png`, `card-bg.png` in `/assets`
4. **Text:** Edit names, date, venue in `index.html`
5. **Tilt:** Change `maxTilt` and multipliers in `script.js`
6. **Emoji Galaxy:** Update `emojiList` in `script.js`
7. **Confetti:** Modify `burstConfetti()` params
8. **Music:** Replace or remove `music.mp3`; toggle button included
9. **Countdown:** Change wedding date/time in `script.js`


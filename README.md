# Muralimano Jayakumar — DevOps & SRE Portfolio

Responsive, dependency-free portfolio website for GitHub Pages.

## Publish on GitHub Pages

1. Extract this ZIP.
2. Open Terminal in the folder that contains the extracted portfolio folder.
3. Clone your existing repository and copy the portfolio into it:

   ```bash
   git clone https://github.com/Muralimano-Jayakumar/Muralimano-Jayakumar.github.io.git portfolio-deploy
   rsync -av --exclude='.git' muralimano-github-pages-portfolio/ portfolio-deploy/
   cd portfolio-deploy
   git add .
   git commit -m "Launch DevOps and SRE portfolio"
   git push origin main
   ```

4. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source if it is not already selected.
5. The site will be available at <https://muralimano-jayakumar.github.io/>.

If Git asks you to authenticate, sign in through the browser or run `gh auth login`. Never paste a password or token into a public command or chat.

## Local preview

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

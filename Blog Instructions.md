# 📓 Blog Setup & Deployment (Windows + Obsidian + Hugo + GitHub Pages)

This document explains how to maintain and deploy your Markdown-based blog from Obsidian using Hugo (PaperMod theme) and GitHub Actions. All commands assume **PowerShell** on Windows.

---
## Quick Helpful Notes

### **Hugo’s built-in `youtube` shortcode**

Inside your Markdown:

`{{< youtube dQw4w9WgXcQ >}}` (everything after the youtube v={HERE})

This is shorter, but only works inside content files that are processed by Hugo (not files read manually via `readFile` and `markdownify` like you're doing for your custom homepage section).

So **don't use this inside `readFile` + `markdownify` blocks**.

Math: https://gohugo.io/content-management/mathematics/


## 📁 Folder Structure

Your blog is located inside your Obsidian vault at:
```
C:\Users\engkad\Documents\vault\Projects\blog\
├── content\
│   └── posts\             ← Markdown posts (each post is a single `.md` file or a Page Bundle folder)
├── static\
│   └── images\            ← Image assets
├── themes\
│   └── PaperMod\          ← Hugo theme files
├── public\                ← Auto-generated site output (ignored by Git)
├── .github\
│   └── workflows\
│       └── deploy.yml     ← GitHub Actions workflow
├── hugo.toml              ← Hugo configuration
└── .gitignore
```

> **Note on `content/posts/`**:  
> - You can place each post as a single Markdown file (e.g. `content/posts/My-First-Post.md`).  
> - If you want to keep images or other resources _with_ a specific post, wrap them in a folder, e.g.:  
>   ```
>   content/posts/My-First-Post/
>   ├── index.md
>   └── image.png
>   ```  
>   Hugo will treat that folder as a **Page Bundle**, automatically including `image.png` alongside `index.md`.  
> - If you use a single-file post (no folder), then all images must go under `static/images/`, and you reference them as `/images/your-file.png` in the Markdown.

---

## 🧑‍💻 Daily Workflow (Writing & Publishing)

1. **Create or update a post**  
   - **Option A (Single `.md` file)**  
	 Create a new .md file in Obsidian
	 In `My-New-Post.md`, include Hugo frontmatter at the top:
     ```markdown
     ---
     title: "My New Post"
     date: 2025-06-02
     draft: false
     ---
     
     This is the content of my post.
     
     ![Alt text](/images/my-image.png)
     ```
     Then save. Any images must be placed in `static/images\my-image.png`.

   - **Option B (Page Bundle with images in the same folder)**  
     ```powershell
     New-Item -Path .\content\posts\My-First-Post -ItemType Directory
     New-Item -Path .\content\posts\My-First-Post\index.md -ItemType File
     New-Item -Path .\content\posts\My-First-Post\image.png -ItemType File   # copy your image here
     notepad .\content\posts\My-First-Post\index.md
     ```  
     In `index.md`:
     ```markdown
     ---
     title: "My First Post"
     date: 2025-06-02
     draft: false
     ---
     
     Here’s an image stored alongside this post:
     
     ![Alt text](image.png)
     ```
     Hugo will bundle `image.png` automatically.

2. **Preview locally**  
   In PowerShell, from the blog root:
   ```powershell
  cd C:\Users\engkad\Documents\vault\Projects\blog
   hugo server -D
   ```
   - Open your browser to `http://localhost:1313` to see the site with your new/edited post.  
   - Changes are automatically detected and rebuilt
   - When finished previewing, press `Ctrl + C` to stop the server.

3. **Commit changes and push with GitHub Desktop**

---

## 🚀 One-Time Setup (on a New Windows Machine)

### 1. Install Git for Windows
1. Download the installer from  
   https://git-scm.com/download/win  
2. Run it with default settings, except make sure to select **“Git from the command line and also from 3rd-party software”** when asked about PATH.  
3. After installation, verify by opening PowerShell and running:
   ```powershell
   git --version
   ```
   You should see something like `git version 2.xx.x.windows.x`.

### 2. Install Hugo Extended
- **Using Chocolatey (preferred)**  
  1. Open PowerShell **as Administrator**.  
  2. If Chocolatey is not yet installed
	  1. Follow steps on choco website to change policy as needed and install
  3. Once Chocolatey is ready, install Hugo Extended:
     ```powershell
     choco install hugo-extended -y
     ```
- **Manual Download**  
  1. Go to https://github.com/gohugoio/hugo/releases  
  2. Download the **“hugo_extended_Windows-64bit.zip”** (or matching your system).  
  3. Unzip and place `hugo.exe` somewhere on your PATH (e.g. `C:\Program Files\Hugo\`).  
  4. Verify in PowerShell:  
     ```powershell
     hugo version
     ```
     It should print something like `Hugo Static Site Generator v0.147.0-.../extended windows/amd64 BuildDate=...`.

### 3. Clone Your GitHub Repo
1. In PowerShell, navigate to the parent folder of your vault (if not already there):
   ```powershell
   cd C:\Users\engkad\Documents\vault\Projects
   ```
2. Clone the repository:
   ```powershell
   git clone https://github.com/engkad/blog.git
   cd blog
   ```

### 4. Install the PaperMod Theme (if missing)
- **If `themes\PaperMod\` is already committed**, you can skip this.  
- Otherwise, add it via submodule:  
  ```powershell
  git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
  git commit -m "Add PaperMod theme as submodule"
  git push
  ```
- Or download the ZIP from https://github.com/adityatelange/hugo-PaperMod, extract to `themes\PaperMod`, then:
  ```powershell
  git add themes\PaperMod
  git commit -m "Add PaperMod theme"
  git push
  ```

---

## ⚙️ GitHub Actions & Pages Deployment

Your GitHub repo: https://github.com/engkad/blog  
- **Main branch**: `main`  
- **Deploy branch**: `gh-pages`  
- **Live site**: https://engkad.github.io/blog/  

### Workflow File Location
```
blog\.github\workflows\deploy.yml
```

### Workflow Behavior
1. On every push to `main`, GitHub Actions:
   - Checks out the repo (including the `themes/PaperMod` submodule).
   - Installs Hugo Extended (`v0.147.0` or later).
   - Runs `hugo --minify` to build static files into `public\`.
   - Commits and pushes the `public\` folder to the `gh-pages` branch.
2. GitHub Pages is configured to serve from the `gh-pages` branch (root), making the site live at `https://engkad.github.io/blog/`.

> **No manual “git push gh-pages” step is required**—the action automates it.

---

## 📸 Image Handling

- **All images must live under**:
  ```
  blog\static\images\
  ```
- In your Markdown (`.md`) files, reference them as:
  ```markdown
  ![Alt text](/images/my-image.png)
  ```
- If you use a **Page Bundle** (per-post folder), Hugo will copy images automatically. In that case, keep resources (e.g., `image.png`) inside the same folder as `index.md`.

---

## ✅ Summary Checklist

1. **One-Time Setup**  
   - Install Git for Windows  
   - Install Hugo Extended  
   - Clone `https://github.com/engkad/blog.git`  
   - Ensure `themes\PaperMod\` is present  

2. **Daily Authoring**  
   - Create/edit posts in `content/posts\` (single `.md` or Page Bundle)  
   - Add images to `static/images\` if not bundling  
   - Preview with `hugo server`  
   - `git add .` → `git commit -m "…" ` → `git push`  

3. **Automated Build & Deploy**  
   - GitHub Actions builds and pushes `public\` → `gh-pages`  
   - Site is live on `https://engkad.github.io/blog/`

That’s it—your Obsidian-to-Hugo-to-GitHub-Pages pipeline is fully automated on Windows. Enjoy writing!  
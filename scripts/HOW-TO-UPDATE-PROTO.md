# How to update or add PROTO pages

Every page in `PROTO/` is password protected with StatiCrypt. The files in `PROTO/` are
encrypted, so never edit them directly. The readable copies live in `_src/PROTO/`. Edit those,
then encrypt them into `PROTO/`.

`_src/` is kept out of git, so it only exists on this computer. Back it up somewhere private
now and then.

All commands below are for a **PowerShell** terminal open at the repo root
(`D:\matomaton.github.io`), such as the VS Code terminal.

## A. Updating an existing page

1. **Get the latest from GitHub** in case anything changed there:
   ```powershell
   git pull
   ```
2. **Open the readable copy** in `_src/PROTO/`, for example
   `_src/PROTO/20261016-Blended-Navigation-HiFi.html`. Never edit the file with the same name in
   `PROTO/`, because that one is encrypted.
3. **Make your changes and save.**
4. **(Optional) Preview it** by opening the `_src/PROTO/` file in your browser (double-click it
   in File Explorer). It shows unencrypted, so you can check the change.
5. **Set the password** for this terminal session:
   ```powershell
   $env:STATICRYPT_PASSWORD = Read-Host "Password"
   ```
   Always use the same password. The shared "Remember me" only works if every page is
   encrypted with the same one. The password lasts until you close the terminal, so you only
   need this step once per session.
6. **Encrypt the page**, changing the filename to the page you edited:
   ```powershell
   node scripts/protect-page.mjs _src/PROTO/20261016-Blended-Navigation-HiFi.html "This prototype" prototype
   ```
   If it asks `y/N` about password length, type `y` and press Enter.
7. **Check that it worked** with `git status`. The file in `PROTO/` should now show as modified.
   If it isn't listed, the encryption didn't run, so go back to step 5.
8. **Publish:**
   ```powershell
   git add PROTO/20261016-Blended-Navigation-HiFi.html
   git commit -m "Describe your change"
   git push
   ```
9. **Check the live page** after a minute or two. Use Ctrl+F5 if you still see the old version.

## B. Adding a new page

1. **Get the latest:** `git pull`
2. **Save the new file into `_src/PROTO/`**, not `PROTO/`. Use a name without spaces, like the
   existing ones (for example `20261020-My-New-Prototype.html`). The name becomes the page's
   address on the site.
3. **Images:** if the page uses local images, put them in `_src/PROTO/assets/` and reference
   them as `src="assets/my-image.png"`. The encryption step builds them into the page, so you
   don't upload image files separately.
4. **(Optional) Preview it** by opening the `_src/PROTO/` file in your browser.
5. **Set the password** (same command as A5).
6. **Encrypt it:**
   ```powershell
   node scripts/protect-page.mjs _src/PROTO/20261020-My-New-Prototype.html "This prototype" prototype
   ```
7. **Check that it worked** with `git status`. A new file should appear in `PROTO/` with the
   same name.
8. **Publish:**
   ```powershell
   git add PROTO/20261020-My-New-Prototype.html
   git commit -m "Add My New Prototype"
   git push
   ```
9. **Check that it's listed.** The PROTO index page finds new files on its own, so you don't need
   to edit it. Open the live index and confirm the new page is there and asks for the password.

### If you uploaded a new page straight to GitHub by mistake

It's live without a password. Run `git pull`, move the file from `PROTO/` into `_src/PROTO/`
(cut and paste, don't copy), then follow steps B5–B8 to encrypt it and push again. Do this
quickly, and remember that GitHub keeps the old unprotected version in its history.

## Encrypting every page at once

For example, after editing several pages. This must be run in **Git Bash**. In PowerShell it
prints an error and encrypts nothing.

```bash
read -rs STATICRYPT_PASSWORD && export STATICRYPT_PASSWORD && bash scripts/protect-proto.sh
```

Then commit and push all of `PROTO/`.

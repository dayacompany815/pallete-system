# AGENTS.md

## Working Agreements

- Work with maximum autonomy inside the current sandbox and repository permissions.
- Do not pause to ask for confirmation when a reasonable implementation path is clear.
- If a command needs system approval because of sandbox, network, account, or `.git` write restrictions, request the required approval directly with the narrowest useful command prefix.
- Do not attempt to bypass required approvals, credential prompts, sandbox restrictions, or destructive-action safeguards.
- Before editing, inspect the relevant files and preserve unrelated user changes.
- Prefer small, focused changes that match the existing HTML/CSS/JavaScript style in this repository.

## Verification

- After changing HTML files, run an inline JavaScript syntax check for the touched pages.
- Run `git diff --check` before committing.
- Report any verification that could not be completed.

## GitHub Upload Policy

- After completing and verifying a code change, commit the touched files and push to `origin/main`.
- Use a concise commit message that describes the user-facing change.
- After pushing, confirm the latest local commit matches the remote `origin/main` commit.
- Do not push if the working tree contains unrelated user changes that are not part of the task; report that situation first.

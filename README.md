# Testr — Web UI

Web front end for **Testr** (testr.pk), an exam question-bank platform. Teachers can add past-paper questions, reviewers can verify them, and users can browse and filter the bank by discipline, subject, paper and topic.

It is a static HTML/CSS/JavaScript site that talks to the [Testr back end](https://github.com/Gladiathor1/Testr_Backend) REST API.

## Features

- **Sign up / log in** with email & password, Google or Facebook, with password-strength validation
- **Browse questions** with filters for discipline, subject, paper and tags
- **Add questions** using a rich-text editor (CKEditor), with drag-and-drop image upload for questions and answers
- **My questions** — view and edit questions you have created
- **Review queue** — reviewers see pending questions and approve or reject them
- **Manage taxonomy** — view disciplines, subjects, papers and tags

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Main question-bank screen (add / browse questions) |
| `login.html`, `signup.html` | Authentication |
| `view-question.html`, `view-question2.html` | Browse and filter questions |
| `my_question.html`, `update.html` | A user's own questions and editing them |
| `verify_question_list.html`, `verify_question.html` | Reviewer queue and single-question review |
| `view_discipline.html`, `view_subject.html`, `view_paper.html`, `view_tag.html` | Taxonomy lists |

Files such as `index1.html`, `indexbackup.html`, `view1.html`, `view2.html` and `tryview.html` are earlier drafts kept for reference.

## Structure

```
assets/scripts/   Page logic and API clients (questions, papers, subjects, tags, auth, filters…)
assets/           Styles, fonts and images
ckeditor/         Bundled CKEditor 4 build
*.html            Pages
main.css, custom.css
```

## Running locally

No build step is needed. Serve the folder with any static file server, for example:

```bash
python -m http.server 5500
```

then open `http://localhost:5500/login.html`.

The API base URL is set inside the scripts in `assets/scripts/` (production `api.testr.pk` / `apps.testr.pk`, with `127.0.0.1:8000` for a local back end). Point it at your own Testr back end instance as needed.

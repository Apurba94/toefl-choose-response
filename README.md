# Listen and Choose a Response

Hear one line and choose the best reply, as in the new TOEFL Listening task.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the TOEFL iBT and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Listen and Choose a Response.exe` from the [latest release](https://github.com/Apurba94/toefl-choose-response/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/toefl-choose-response/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

In the TOEFL Listening task Listen and Choose a Response, you hear one line and choose the reply that fits. This app reads each line aloud with your computer's voices, then asks you to choose. The lines and replies were written for this suite.

Sections: Practice, Voices, Traps, Progress, About.

## How to use it

1. Pick a voice and speed in **Voices**. A slower speed helps at first.
2. In **Practice**, press Play, listen, then choose the reply. Try to answer after one listen, as on the test.
3. Read **Traps** to learn the wrong-answer patterns that appear again and again.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (24 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.

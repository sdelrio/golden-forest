# File and Directory Naming Rules Reference Guide

Applying these rules from the start will ensure your files work consistently with professional tools, terminals, and web environments.

## Eliminate Spaces

Spaces in file names are a *major source of errors* in command-line tools, requiring extra characters like escape characters or quotation marks, and they are invalid in web URLs.

| Bad Example | Reason |
| :---- | :---- |
| `My Project File.py` | Contains spaces. |

| Professional Separator Options | Example | Notes |
| :---- | :---- | :---- |
| **Underscores** | `my_project_file.py` | Most common convention. |
| **Hyphens** (dashes) | `my-project-file.py` | Popular for web files, but some languages treat them as subtraction. |
| **camelCase** | `myProjectFile.py` | First letter is lowercase, subsequent words are capitalized. |
| **PascalCase** | `MyProjectFile.py` | Every word, including the first, starts with a capital letter. |


## Avoid Special Characters

Stick to the safest characters to prevent tools and software from misinterpreting them.

* **Safe Characters:** **Letters (A-Z)**, **Numbers (0-9)**, and the **underscore** (`_`).
* **Usually Safe:** **Hyphens** (`-`).
* **Avoid:** Characters like `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, etc.
* **Special Note:** The **dot** (`.`) is reserved for file extensions and hidden files; avoid using it otherwise.

## Be Descriptively Concise

The goal is to pick names that are clear to others but not so long that they are tedious to type.

| Bad Example | Good Example |
| :---- | :---- |
| `final_copy_of_the_latest_report_from_Q4.pdf` | `2025Q4_sales_report.pdf` |

## Standardize Case

To save yourself pain and frustration, always assume that letter casing matters (e.g., report.txt is different from Report.txt).

* **Recommendation:** When in doubt, use **lowercase** characters, as this is the most common convention, especially when working with servers.

## Use YYYY-MM-DD for Dates

If you include a date in a file or directory name, use the international standard format to ensure chronological sorting works correctly.

* **Format:** **Year-Month-Day** (`YYYY-MM-DD` or `YYYYMMDD`).
* **Key Step:** Always use **leading zeros** for single-digit months and days (e.g., use `03` not `3`) to ensure consistent length and correct sorting by character comparison.

| Bad Date Format | Sorting Issue | Correct Format (YYYYMMDD) |
| :---- | :---- | :---- |
| `report_12-2-2025.txt` | Won't sort chronologically when compared character by character. | `20250212_report.txt` |
| `report_2-12-2025.txt` | Won't sort chronologically when compared character by character.   | `20251202_report.txt` |

## Be Consistent

Once you choose a naming pattern for a project (e.g., using hyphens and all lowercase), **stick with it** throughout the entire project to avoid confusing collaborators and peers.

## References

[Naming Files and Directories the Right Way](https://youtu.be/pjnSE99-cz0)

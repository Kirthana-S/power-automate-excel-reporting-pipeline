# Security Policy

## Sensitive Data

This repository is a sanitized demonstration project. It must not include:

- Company-specific report data
- Customer or incident information
- SharePoint URLs
- Email addresses
- Access tokens
- API keys
- Power BI workspace IDs
- Power Automate connection references
- Internal business mapping rules

## Reporting a Security Issue

If you find any sensitive information accidentally committed to this repository, please open a private security advisory or contact the repository owner.

## Secret Handling

If any secret is accidentally committed:

1. Revoke or rotate the secret immediately.
2. Remove it from the repository.
3. Review Git history if required.
4. Enable secret scanning and push protection.

const generateInstallation = installationText => {
    if (installationText) {
        return `

## Installation

${installationText}

---
`
    }
    else {
        return ""
    }
}

const generatUsage = usageText => {
    if (usageText) {
        return `

## Usage

${usageText}

---
`
    }
    else {
        return "" 
    }
}

const generateContribution = contributionText => {
    if (contributionText) {
        return `

## How To Contribute

${contributionText}

---
`
    }
    else {
        return ""
    }
}
const generatContact = contactText => {
    if (contactText) {
        return `

## Contact Me

${contactText}

---
`
    }
    else {
        return ""
    }
}

module.exports = templateData => {
    const { projectTitle, description, installation, usage, contribute, contact } = templateData

    return `
# ${projectTitle}

## Description
${description}

--- 
${generateInstallation(installation)}
${generatUsage(usage)}
${generateContribution(contribute)}
${generatContact(contact)}
`
}
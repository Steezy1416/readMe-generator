const inquirer = require("inquirer")
const fs = require("fs")
const pageTemplate = require("./develop/pageTemplate")


const projectQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
            validate: userInput => {
                if (userInput) { return true }
                else {
                    console.log("Please enter your GitHub username:")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email? address",
            validate: userEmail => {
                if (userEmail) { return true }
                else {
                    console.log("Please enter your email address")
                }
            }
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
            validate: userTitle => {
                if (userTitle) { return true }
                else {
                    console.log("Please enter your project title:")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for your project:",
            validate: descripttionInput => {
                if (descripttionInput) { return true }
                else {
                    console.log("Please enter a description for your project:")
                    return false
                }
            }
        },
        {
            type: "confirm",
            name: "installationConfirm",
            message: "Would you like to include an installation section?",
            default: true
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter a description on how to install your project:",
            when: ({ installationConfirm }) => installationConfirm
        },
        {
            type: "confirm",
            name: "usageConfirm",
            message: "Would you like to include a usage section?",
            default: true
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter a description on how to use your project:",
            when: ({ usageConfirm }) => usageConfirm
        },
        {
            type: "list",
            name: "license",
            message: "Please select which license you would like for your project:",
            choices: ["None", "MIT", "Apache_2.0", "Artistic_2.0", "Boost_Software", "Academic_Free_v3.0", "Eclipse_Public_2.0"]
        },
        {
            type: "confirm",
            name: "contributeConfirm",
            message: "Would you like to include how to contribute section?",
            default: true
        },
        {
            type: "input",
            name: "contribute",
            message: "Please enter a description on how to contribute to your project:",
            when: ({ contributeConfirm }) => contributeConfirm
        },
        {
            type: "confirm",
            name: "testConfirm",
            message: "Would you like to include a test section?",
            default: true
        },
        {
            type: "input",
            name: "test",
            message: "Please enter a description of your tests for your project:",
            when: ({ testConfirm }) => testConfirm
        },
        {
            type: "confirm",
            name: "questionConfirm",
            message: "Would you like to include a questions section?",
            default: true
        },
        {
            type: "list",
            name: "question",
            message: "How would you like to be contacted? ",
            choices: ["Email", "GitHub Profile", "Both"],
            when: ({ questionConfirm }) => questionConfirm
        }
    ])
}

projectQuestions()
    .then(questionData => {
        console.log(questionData)
        const template = pageTemplate(questionData)

        fs.writeFile("README.md", template, err => {
            if (err) throw err
            console.log(err)
        })
    })
    
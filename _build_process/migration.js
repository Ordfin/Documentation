let fs = require('fs')
let APP_SCHEMA
let DOC_SCHEMA
let APP_MAP = new Map()
let DOC_MAP = new Map()
const APP_SCHEMA_FILE_PATH = '../../Superalgos/Projects/Superalgos/Schemas/AppSchema.json'
const DOC_SCHEMA_FILE_PATH = '../../Superalgos/Projects/Superalgos/Schemas/DocSchema.json'
const FOLDERS_ARRAY = [
    'charting_space',
    'crypto_ecosystem',
    'design_space',
    'data_mine',
    'network',
    'plugins',
    'superalgos_project',
    'super_scripts',
    'trading_engine',
    'trading_system',
    'trading_mine',
    'tutorial'
]
const FOLDER_PATH = './_includes'
const OUTPUT_PATH = './_build/_includes'
const SECTIONS = [
    ['content', '<!--------------------------------------------- CONTENT starts -->', '<!--------------------------------------------- CONTENT ends -->'],
    ['configuring', '<!--------------------------------------------- CONFIGURING starts -->', '<!--------------------------------------------- CONFIGURING ends -->'],
    ['running', '<!--------------------------------------------- STARTING starts -->', '<!--------------------------------------------- STARTING ends -->'],
    ['charts', '<!--------------------------------------------- CHARTS starts -->', '<!--------------------------------------------- CHARTS ends -->']
]

readAppSchema()

function readAppSchema() {
    fs.readFile(APP_SCHEMA_FILE_PATH, onFileRead)

    function onFileRead(err, file) {
        if (err) {
            console.log('[ERROR] build -> Error reading AppSchema -> err = ' + err.stack)
            return
        } else {
            console.log('AppSchema read.')
        }

        APP_SCHEMA = JSON.parse(file.toString())

        for (let i = 0; i < APP_SCHEMA.length; i++) {
            let node = APP_SCHEMA[i]
            APP_MAP.set(node.type, node)
        }
        readDocSchema()
    }
}

function readDocSchema() {
    DOC_SCHEMA = []

    for (let i = 0; i < DOC_SCHEMA.length; i++) {
        let node = DOC_SCHEMA[i]
        DOC_MAP.set(node.type, node)
    }
    addMissingNodes()
}

function addMissingNodes() {
    for (let i = 0; i < APP_SCHEMA.length; i++) {
        let appNode = APP_SCHEMA[i]
        let docNode = DOC_MAP.get(appNode.type)
        if (docNode === undefined) {
            docNode = {
                type: appNode.type
            }
            DOC_SCHEMA.push(docNode)
            DOC_MAP.set(docNode.type, docNode)
        }
    }
    removeDeletedNodes()
}

function removeDeletedNodes() {
    let NEW_DOC_SCHEMA = []
    for (let i = 0; i < DOC_SCHEMA.length; i++) {
        let docNode = DOC_SCHEMA[i]
        let appNode = APP_MAP.get(docNode.type)
        if (appNode === undefined) {
            DOC_MAP.delete(docNode.type)
        } else {
            NEW_DOC_SCHEMA.push(docNode)
        }
    }
    DOC_SCHEMA = NEW_DOC_SCHEMA
    readLegacyDefinitions()
}

function writeDocSchema(callbackFunction) {
    const DOC_SCHEMA_FOLDER = '../../Superalgos/Projects/Superalgos/Schemas'
    deleteFolderContent(DOC_SCHEMA_FOLDER + '/Docs-Nodes')

    for (let i = 0; i < DOC_SCHEMA.length; i++) {
        let nodeDefinition = DOC_SCHEMA[i]
        writeFile(nodeDefinition)
    }
    callbackFunction()

    function writeFile(nodeDefinition) {
        let fileContent = JSON.stringify(nodeDefinition, undefined, 4)
        let fileName = nodeDefinition.type.toLowerCase().replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-')
        fs.writeFileSync(DOC_SCHEMA_FOLDER + '/Docs-Nodes/' + fileName + '.json', fileContent)
    }
}

function deleteFolderContent(directory) {
    const fs = require('fs');
    const path = require('path');

    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
    });
}

function readLegacyDefinitions() {
    let filesCount = 0
    filesArray = [
        './_data/charting_space.yml',
        './_data/crypto_ecosystem.yml',
        './_data/design_space.yml',
        './_data/data_mine.yml',
        './_data/trading_mine.yml',
        './_data/network.yml',
        './_data/plugins.yml',
        './_data/super_scripts.yml',
        './_data/trading_engine.yml',
        './_data/trading_system.yml',
        './_data/superalgos_project.yml',
        './_data/tutorial.yml'
    ]

    for (let i = 0; i < filesArray.length; i++) {
        let fileName = filesArray[i]
        readFileDefinitions(fileName)
    }

    function readFileDefinitions(fileName) {
        fs.readFile(fileName, onFileRead)

        function onFileRead(err, file) {
            if (err) {
                console.log('[ERROR] build -> Error reading File ' + fileName + ' -> err = ' + err.stack)
                return
            } else {
                console.log(fileName + ' read.')
            }
            let contentArray = file.toString().split('"')

            for (let i = 0; i < contentArray.length; i = i + 2) {
                let nodeName = contentArray[i]
                let definition = contentArray[i + 1]
                let fullNodeName = restoreLegacyNodeName(nodeName)

                docNode = DOC_MAP.get(fullNodeName)
                if (docNode === undefined) {
                    console.log('[ERROR] build -> Error reading File ' + fileName + ' -> nodeName ' + fullNodeName + ' was not found at DocSchema.')
                } else {
                    docNode.definition = {
                        text: definition
                    }
                }
            }
            filesCount++
            if (filesCount === filesArray.length) {
                readLegacyContent()
            }
        }
    }
}

function restoreLegacyNodeName(nodeName) {

    nodeName = nodeName.replace(/[\n\r]+/g, '')
    nodeName = nodeName.replace(' ', '')
    nodeName = nodeName.replace(':', '')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')

    let nodeNameArray = nodeName.split('_')
    let fullNodeName = ''
    let space = ''

    for (let j = 0; j < nodeNameArray.length; j++) {
        let nodeNamePart = nodeNameArray[j]
        nodeNamePart = capitalizeFirstLetter(nodeNamePart)
        fullNodeName = fullNodeName + space + nodeNamePart
        space = ' '
    }
    return fullNodeName
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function readLegacyContent() {
    let totalFiles = 0
    let fileCounter = 0

    for (let i = 0; i < FOLDERS_ARRAY.length; i++) {
        let folderName = FOLDERS_ARRAY[i]
        scanFolder(folderName)
    }

    function scanFolder(folderName) {

        fs.readdir(FOLDER_PATH + '/' + folderName, (err, files) => {
            if (err) {
                console.log('[ERROR] build -> Error reading Folder ' + folderName + ' -> err = ' + err.stack)
                return
            } else {
                console.log(folderName + ' read.')
            }

            let sectionTitleAlreadyCreated
            for (let i = 0; i < files.length; i++) {
                let fileName = files[i]

                readFileSection(fileName)
            }

            function readFileSection(fileName) {

                totalFiles++
                fs.readFile(FOLDER_PATH + '/' + folderName + '/' + fileName, onFileRead)

                function onFileRead(err, file) {
                    if (err) {
                        console.log('[ERROR] build -> Error reading file content of file ' + fileName + ' -> err = ' + err.stack)
                        return
                    } else {
                        //console.log(fileName + ' content read.')
                    }

                    let legacyNodeName = fileName.replace('.md', '')
                    let fullNodeName = restoreLegacyNodeName(legacyNodeName)
                    let docNode = DOC_MAP.get(fullNodeName)

                    if (docNode === undefined) {
                        console.log('[ERROR] build -> Error reading content from File ' + fileName + ' -> nodeName ' + fullNodeName + ' was not found at DocSchema.')
                        fileCounter++
                        return
                    } else {
                        docNode.paragraphs = []
                    }

                    fileCounter++
                    for (let j = 0; j < SECTIONS.length; j++) {
                        let sectionArray = SECTIONS[j]
                        readSection(sectionArray[0], sectionArray[1], sectionArray[2])
                    }

                    if (fileCounter === totalFiles) {
                        writeDocSchema(migrationEnd)
                    }

                    function readSection(propertyName, initialSplit, finalSplit) {

                        let fileContent = file.toString()

                        /* Basic validations */
                        if (fileContent.indexOf(initialSplit) < 0) {
                            //console.log('[ERROR] build -> Section not processed. ' + initialSplit + ' was not found at file: ' + folderName + '/' + fileName)
                            return
                        }

                        if (fileContent.indexOf(finalSplit) < 0) {
                            //console.log('[ERROR] build -> Section not processed. ' + finalSplit + ' was not found at file: ' + folderName + '/' + fileName)
                            return
                        }

                        let contentArray = fileContent.split(initialSplit)
                        if (contentArray[1] === undefined) {
                            console.log('[ERROR] build -> Bad Format for ' + propertyName + '. Could not extract this data for file: ' + folderName + '/' + fileName)
                            return
                        }

                        contentArray = contentArray[1].split(finalSplit)
                        fileContent = contentArray[0]
                        let paragraphArray = fileContent.split('\n')

                        let code = false
                        let jsonCode = false
                        let jsCode = false
                        let table = false
                        let row = false
                        let list = false

                        let filteredArray = []
                        let style = 'Text'

                        sectionTitleAlreadyCreated = false

                        for (let i = 0; i < paragraphArray.length; i++) {
                            let paragraph = paragraphArray[i]
                            if (paragraph === "\r") { continue }
                            if (paragraph === "") { continue }
                            if (paragraph.length <= 1) { continue }
                            if (paragraph.indexOf('XXXXXXX') >= 0) { continue }
                            filteredArray.push(paragraph)
                        }
                        for (let i = 0; i < filteredArray.length; i++) {
                            let paragraph = filteredArray[i]
                            /* Ok the paragraph is accepted but it needs cleaning .md tags and turning them into HTML */
                            paragraph = paragraph.replace(' \r', '')
                            paragraph = paragraph.replace('\r', '')

                            paragraph = titleDownCase(paragraph)
                            paragraph = titleDownCase(paragraph)
                            paragraph = titleDownCase(paragraph)
                            paragraph = link(paragraph)

                            paragraph = includeHeadings(paragraph)
                            paragraph = includeCharts(paragraph)
                            paragraph = includeConfig(paragraph)

                            for (j = 0; j < 10; j++) {
                                paragraph = hyperlink(paragraph)

                                let importantText = important(paragraph)
                                if (paragraph !== importantText) {
                                    paragraph = importantText
                                    style = "Important"
                                }

                                let warningText = warning(paragraph)
                                if (paragraph !== warningText) {
                                    paragraph = warningText
                                    style = "Warning"
                                }

                                let noteText = note(paragraph)
                                if (paragraph !== noteText) {
                                    paragraph = noteText
                                    style = "Note"
                                }

                                let successText = success(paragraph)
                                if (paragraph !== successText) {
                                    paragraph = successText
                                    style = "Success"
                                }

                                let subTitleText = subTitle(paragraph)
                                if (paragraph !== subTitleText) {
                                    paragraph = subTitleText
                                    style = "Subtitle"
                                }

                                let gifText = gif(paragraph)
                                if (paragraph !== gifText) {
                                    paragraph = gifText
                                    style = "Gif"
                                }

                                let pngText = png(paragraph)
                                if (paragraph !== pngText) {
                                    paragraph = pngText
                                    style = "Png"
                                }

                                paragraph = bold(paragraph)
                                paragraph = spans(paragraph)
                                paragraph = italics(paragraph)
                                paragraph = paragraph.replace('</i> </b>', '</i></b>')
                                paragraph = title(paragraph)
                                paragraph = inlineCode(paragraph)

                                let jsonText = checkJsonCode(paragraph)
                                if (paragraph !== jsonText) {
                                    paragraph = jsonText
                                    style = "Json"
                                }

                                let jsText = checkJsCode(paragraph)
                                if (paragraph !== jsText) {
                                    paragraph = jsText
                                    style = "Javascript"
                                }

                                let codeText = checkCode(paragraph)
                                if (paragraph !== codeText) {
                                    paragraph = codeText
                                    style = "Text"
                                }

                                //paragraph = checkTable(paragraph)
                            }

                            let listText = checkList(paragraph, filteredArray[i + 1])
                            if (paragraph !== listText) {
                                paragraph = listText
                                style = "List"
                            }

                            let paragraphObject = {
                                style: style,
                                text: paragraph
                            }

                            if (paragraph !== '') {

                                if (sectionTitleAlreadyCreated === false) {
                                    switch (propertyName) {
                                        case 'content': {
                                            let sectionTitle = {
                                                style: 'Block',
                                                text: 'Content'
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            break
                                        }
                                        case 'adding': {
                                            break
                                            let sectionTitle = {
                                                style: 'Title',
                                                text: 'Adding a ' + fullNodeName + ''
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            break
                                        }
                                        case 'configuring': {
                                            let sectionTitle = {
                                                style: 'Block',
                                                text: 'Configuring'
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            sectionTitle = {
                                                style: 'Title',
                                                text: 'Configuring ' + fullNodeName + ''
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            break
                                        }
                                        case 'running': {
                                            let sectionTitle = {
                                                style: 'Block',
                                                text: 'Running'
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            sectionTitle = {
                                                style: 'Title',
                                                text: 'Running ' + fullNodeName + ''
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            break
                                        }
                                        case 'charts': {
                                            let sectionTitle = {
                                                style: 'Block',
                                                text: 'Charts'
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            sectionTitle = {
                                                style: 'Title',
                                                text: '' + fullNodeName + ' at the Charts'
                                            }
                                            docNode.paragraphs.push(sectionTitle)
                                            break
                                        }
                                    }
                                    sectionTitleAlreadyCreated = true
                                }
                                docNode.paragraphs.push(paragraphObject)
                            }

                            style = 'Text'
                        }

                        function includeHeadings(text) {
                            if (text.indexOf('{{include.heading}}##') >= 0) {
                                return '<H4>' + text.replace('{{include.heading}}## ', '') + '</H4>'
                            } else {
                                return text
                            }

                        }

                        function includeCharts(text) {
                            if (text.indexOf('{{include.charts}}#') >= 0) {
                                return '<H4>' + text.replace('{{include.charts}}# ', '') + '</H4>'
                            } else {
                                return text
                            }
                        }

                        function includeConfig(text) {
                            if (text.indexOf('{{include.configuring}}#') >= 0) {
                                return '<H4>' + text.replace('{{include.configuring}}# ', '') + '</H4>'
                            } else {
                                return text
                            }
                        }


                        function link(text) {
                            let result = text
                            if (result.indexOf('.html') < 0) { return text }
                            if (result.indexOf('](') < 0) { return text }
                            if (result.indexOf('[') < 0) { return text }

                            let first = result.split('[')
                            let second = first[1].split('](')
                            let third = second[1].split(')')

                            result = first[0] + second[0] + third[1]
                            return result
                        }

                        function hyperlink(text) {
                            let result = text
                            if (result.indexOf('<a') < 0) { return text }
                            if (result.indexOf('>') < 0) { return text }
                            if (result.indexOf('</a>') < 0) { return text }

                            let first = result.indexOf('<a')
                            let second = result.indexOf('</a>')
                            let third = result.indexOf('>')

                            result = result.substring(0, first) + result.substring(third + 1, second) + result.substring(second + 4, result.length)
                            return result
                        }

                        function checkTable(text) {

                            if (code || jsonCode || jsCode) { return text }

                            let result = text
                            if (table === false) {
                                if (row === false) {
                                    if (result.indexOf('|') < 0) { return text }
                                    result = result.replace('|', '<table class="docs-table"><tr><td>')
                                    table = true
                                    row = true
                                } else {
                                    result = result.replace('|', '</td><td>')
                                }
                            } else {
                                if (row === false) {
                                    if (result.indexOf('|') >= 0 && result.indexOf('<tr>') < 0) {
                                        result = result.replace('|', '<tr><td>')
                                        row = true
                                    } else {
                                        if (result.indexOf('|') < 0 && result.indexOf('</tr>') < 0) {
                                            result = '</table>' + result
                                            table = false
                                        } else {
                                            if (result.indexOf('|') >= 0) {
                                                result = result.replace('|', '<tr><td>')
                                                row = true
                                            }
                                        }
                                    }

                                } else {
                                    if (result.indexOf('|') < 0) { return text }
                                    result = result.replace('|', '</td><td>')
                                    if (result.indexOf('|') < 0) {
                                        result = result + '</tr>'
                                        result = result.replace('<td></tr>', '</tr>')
                                        row = false
                                    }
                                }
                            }
                            return result
                        }

                        function checkList(text, nextText) {
                            let result = text
                            if (list === false) {

                                if (result.indexOf('* ') === 0) {
                                    if (nextText !== undefined) {
                                        result = result.replace('* ', '')
                                        list = true
                                    } else {
                                        result = result.replace('* ', '')
                                        list = false
                                    }
                                }
                            } else {
                                if (result.indexOf('* ') === 0) {
                                    if (nextText !== undefined) {
                                        result = result.replace('* ', '')
                                        list = true
                                    } else {
                                        result = result.replace('* ', '')
                                        list = false
                                    }
                                } else {
                                    result = ''
                                    list = false
                                }
                            }
                            return result
                        }

                        function png(text) {
                            let result = text
                            if (result.indexOf('.png') < 0) { return text }
                            if (result.indexOf('![') < 0) { return text }
                            if (result.indexOf(']') < 0) { return text }

                            let first = result.split('![')
                            let second = first[1].split(']')
                            let third = second[1].split(')')

                            result = first[0] + 'PNGs/Superalgos/Docs/inner-foder/' + second[0].toLowerCase() + '.png' + third[1]
                            return result
                        }

                        function gif(text) {
                            let result = text
                            if (result.indexOf('.gif') < 0) { return text }
                            if (result.indexOf('![') < 0) { return text }
                            if (result.indexOf(']') < 0) { return text }

                            let first = result.split('[![')
                            let second = first[1].split(']')
                            let third = second[1].split(')')

                            result = first[0] + 'GIFs/Superalgos/Docs/inner-foder/' + second[0].toLowerCase() + '.gif' + third[1]
                            return result
                        }


                        function subTitle(text) {
                            let result = text
                            if (result.indexOf('{% if include.heading == \"more\" %}##{% else %}{{include.heading}}{% endif %}### ') < 0) { return text }
                            result = result.replace('{% if include.heading == \"more\" %}##{% else %}{{include.heading}}{% endif %}### ', '')
                            return result
                        }

                        function important(text) {
                            let result = text
                            if (result.indexOf('{% include important.html content=\"') < 0) { return text }
                            result = result.replace('{% include important.html content=\"', '')
                            if (result.indexOf('\" %}') < 0) { return text }
                            result = result.replace('\" %}', '')
                            return result
                        }

                        function warning(text) {
                            let result = text
                            if (result.indexOf('{% include warning.html content=\"') < 0) { return text }
                            result = result.replace('{% include warning.html content=\"', '')
                            if (result.indexOf('\" %}') < 0) { return text }
                            result = result.replace('\" %}', '')
                            return result
                        }

                        function note(text) {
                            let result = text
                            if (result.indexOf('{% include note.html content=\"') < 0) { return text }
                            result = result.replace('{% include note.html content=\"', '')
                            if (result.indexOf('\" %}') < 0) { return text }
                            result = result.replace('\" %}', '')
                            return result
                        }

                        function success(text) {
                            let result = text
                            if (result.indexOf('{% include callout.html type=\"success\" content=\"') < 0) { return text }
                            result = result.replace('{% include callout.html type=\"success\" content=\"', '')
                            if (result.indexOf('\" %}') < 0) { return text }
                            result = result.replace('\" %}', '')
                            return result
                        }

                        function bold(text) {
                            let result = text
                            result = result.replace('***', '* **')
                            result = result.replace('**', '')
                            if (result.indexOf('**') < 0) { return text }
                            result = result.replace('**', '')
                            return result
                        }

                        function spans(text) {
                            let result = text
                            result = result.replace('<span style=\"display: block; background: ', '')
                            result = result.replace('>&nbsp;</span>', '')
                            result = result.replace('; border: 1px solid black;\"', '')
                            return result
                        }

                        function italics(text) {
                            let result = text
                            result = result.replace('*', '')
                            if (result.indexOf('*') < 0) { return text }
                            result = result.replace('*', '')
                            return result
                        }

                        function titleDownCase(text) {
                            let result = text
                            result = result.replace('{{ title | downcase }}', fullNodeName.toLowerCase())
                            return result
                        }

                        function title(text) {
                            let result = text
                            result = result.replace('{{ title }}', fullNodeName)
                            return result
                        }

                        function inlineCode(text) {
                            let result = text
                            result = result.replace('```', '')
                            if (result.indexOf('```') < 0) { return text }
                            result = result.replace('```', '')
                            return result
                        }

                        function checkJsonCode(text) {
                            let result = text
                            if (result.indexOf('```') < 0) { return text }
                            if (jsonCode === false) {
                                if (result.indexOf('```json') >= 0) {
                                    result = result.replace('```json', '')
                                    jsonCode = true
                                }
                            } else {
                                if (result.indexOf('```') >= 0) {
                                    result = result.replace('```', '')
                                    jsonCode = false
                                }
                            }
                            return result
                        }

                        function checkJsCode(text) {
                            let result = text
                            if (result.indexOf('```') < 0) { return text }
                            if (jsCode === false) {
                                if (result.indexOf('```js') >= 0) {
                                    result = result.replace('```js', '')
                                    jsCode = true
                                }
                            } else {
                                if (result.indexOf('```') >= 0) {
                                    result = result.replace('```', '')
                                    jsCode = false
                                }
                            }
                            return result
                        }

                        function checkCode(text) {
                            let result = text
                            if (jsonCode === true || jsCode === true) { return text }
                            if (result.indexOf('```') < 0) { return text }
                            if (code === false) {
                                result = result.replace('```', '')
                                code = true
                            } else {
                                result = result.replace('```', '')
                                code = false
                            }
                            return result
                        }
                    }
                }
            }
        })
    }
}

function migrationEnd() {
    console.log('Migration Finished')
}


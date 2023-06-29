const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const modelsRoot = path.join(__dirname, '../public/models')
const modelsComponentsRoot = path.join(__dirname, '../src/components/models')

const modelsPath = (type) => path.join(modelsRoot, type)

const editTSXFile = (content) => {}

const convertModels = async (type) => {
  const modelPath = modelsPath(type)

  const OBJFiles = fs.readdirSync(modelPath).filter((file) => /^.*\.(obj|OBJ)$/.test(file))
  console.log("🚀 ~ file: convert-models.js:13 ~ convertFile ~ OBJFiles:", OBJFiles.length)

  // await Promise.all([
  //   OBJFiles.map((file) => {
  //     exec(
  //       `npx obj2gltf -i ${path.join(modelPath, file)} -o ${path.join(modelPath, `${file.replace(/.(obj|OBJ)/, '')}.glb`)}`,
  //       (error, stdout, stderr) => {
  //         if (error) {
  //           console.error(`exec error: ${error}`);
  //           return;
  //         }
  //         console.log(`stdout: ${stdout}`);
  //         console.error(`stderr: ${stderr}`);
  //       }
  //     )
  //   })
  // ])

  const GLBFiles = fs.readdirSync(modelPath).filter((file) => /^.*\.(glb|GLB)$/.test(file))
  console.log("🚀 ~ file: convert-models.js:33 ~ convertModels ~ GLBFiles:", GLBFiles)

  // await Promise.all([
  //   GLBFiles.map(async (file) => {
  //     await exec(
  //       `cd ${modelPath} && npx gltfjsx ${file} --transform --types --output ${file.replace(/.(glb|GLB)/, '')}.tsx`,
  //       (error, stdout, stderr) => {
  //         if (error) {
  //           console.error(`exec error: ${error}`);
  //           return;
  //         }
  //         console.log(`stdout: ${stdout}`);
  //         console.error(`stderr: ${stderr}`);
  //       }
  //     )
  //   })
  // ])

  const TSXFiles = fs.readdirSync(modelPath).filter((file) => /^.*\.(tsx|TSX)$/.test(file))
  console.log("🚀 ~ file: convert-models.js:51 ~ TSXFiles:", TSXFiles)

  // await Promise.all([
  //   TSXFiles.map(async (file) => {
  //     await fs.rename(path.join(modelPath, file), path.join(modelsComponentsRoot, type, file), (err) => {
  //       if (err) {
  //         console.error(`exec error: ${err}`)
  //         return
  //       }
  //     })
  //   })
  // ])

  const TSXFilesComponents = fs.readdirSync(path.join(modelsComponentsRoot, type)).filter((file) => /^.*\.(tsx|TSX)$/.test(file))
  console.log("🚀 ~ file: convert-models.js:66 ~ convertModels ~ TSXFilesComponents:", TSXFilesComponents)

  await Promise.all([
    TSXFilesComponents.map(async (file) => {
      await fs.readFile(path.join(modelsComponentsRoot, type, file), { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          console.error(`exec error: ${err}`)
          return
        }

        const result = data.replace(/'.*-transformed\.glb'/g, `'models/${type}/${file.replace(/.(tsx|TSX)/, '')}-transformed.glb'`)
        
        fs.writeFileSync(path.join(modelsComponentsRoot, type, file), result, { encoding: 'utf-8' })
      })
    })
  ])
}

convertModels('weapons')

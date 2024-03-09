const express = require('express')
const router = express.Router();
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage })
const Moralis = require('moralis').default
const axios = require('axios')
const { spawn } = require('child_process');
async function main(files) {
    try {
        const uploadArray = files.map(({ path, content }) => ({
            path: path,
            content: content.toString('base64')
        }));
        const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi: uploadArray });
        return response.raw[0].path;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
router.post('/', upload.single('File'), async (req, res) => {

    try {

        // const files = [{
        //     path: req.file.originalname,
        //     content: req.file.buffer
        // }];
        // const fileHashes = await main(files);
        // const fileUrl = `${fileHashes}`;;
        // console.log(fileUrl)
        // code to get from the ipfs Link

        const fileUrl = "https://ipfs.moralis.io:2053/ipfs/QmdDnznr7wHREpctA3BNwGHfumzRsYPrGJ7DjSP7Vkw2Z1/MNNIT_ALLAHABAD_Resume_Template.pdf";
        const ImageUrl = "https://ipfs.moralis.io:2053/ipfs/QmX23Y749bWZzLam38bjPpQaUCa9ncviG56VCJ3LMnWtdp/profile_image.jpg"
        const response = await axios.get(ImageUrl, {
            responseType: 'arraybuffer' // Set responseType to 'arraybuffer' to receive binary data
        });
        // Access the response data directly (which is a buffer for arraybuffer responseType)
        const ImageBuffer = response.data;
        const response2 = await axios.get(fileUrl, {
            responseType: 'arraybuffer'
        })
        const FileBuffer = response2.data;
        const fileBase64 = FileBuffer.toString('base64');
        const imageBase64 = ImageBuffer.toString('base64');

        // Concatenate base64 strings with newline character between them
        const combinedBase64 = `${fileBase64}\n${imageBase64}`;
        const pythonProcess = spawn('python', ['Signature.py']);
        const combinedBuffer = Buffer.concat([FileBuffer, Buffer.from('\n'), ImageBuffer]);
        pythonProcess.stdin.write(combinedBase64);
        pythonProcess.stdin.end();

        // Capture stdout data
        let signedPdfBuffer = Buffer.alloc(0);
        pythonProcess.stdout.on('data', (data) => {
            signedPdfBuffer = Buffer.concat([signedPdfBuffer, data]);
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Error from Python script: ${data}`);
        });

        pythonProcess.on('close', async (code) => {
            const files = [{
                path: "/public/Madhav",
                content: signedPdfBuffer
            }];
            const fileHashes = await main(files);
            const fileUrl = `${fileHashes}`;;
            console.log(fileUrl)
        });
        // pythonProcess.stdin.write();
        return res.status(200).json({
            message: 'File uploaded to IPFS successfully',
            ipfsLink: fileUrl
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Failed to upload file to IPFS'
        });
    }
})

module.exports = router;
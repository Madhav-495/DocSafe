import React, { useState } from 'react'
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Paper,
    Stack,
    TextField,
    TextareaAutosize,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SubjectIcon from '@mui/icons-material/Subject'
import Sidebars from './Sidebars';
const Complaint = () => {
    const [FileName, setFileName] = useState("No File Chosen")
    return (
        <>

            <div className="flex ">
                {/* Sidebar */}
                <div className="w-1/4 bg-gray-800 text-white p-4">
                    <Sidebars />
                </div>

                {/* Main Content */}
                <div className="w-3/4">
                    <div className="flex items-center justify-center flex-col">
                        {/* Your existing content */}
                        <div className="flex items-center justify-center flex-col">
                            <div className=" flex items-center justify-center flex-row ">
                                <img src="../images/Docsafe-ai.png" alt="DocuSafe" style={{ width: "10%", borderRadius: "50%" }} />
                                <h1 className="text-white-400 ml-6 font-serif"> DocSafe </h1>
                            </div>
                            <div className=' flex items-center justify-center flex-col mt-7' style={{ width: "80%" }} >
                                <h1 className='text-red-400 font-bold'>Complaint-Form</h1>
                                <p className='text-center text-red-400'>
                                    Please Fill out the Following Form for Complaint.<br />
                                    We will soon reach out to you and will get response with us
                                </p>
                            </div>
                            <div>
                                <Box sx={{ flexGrow: 1, p: 3, marginTop: '5%' }}>
                                    <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: 'auto', marginTop: '50px' }}>
                                        <form>
                                            <Stack spacing={2}>
                                                <TextField

                                                    label="Subject"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="FileName"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <IconButton>
                                                                    <SubjectIcon />
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                                <TextareaAutosize

                                                    minRows={3}
                                                    maxRows={10}
                                                    aria-label="File Description"
                                                    placeholder="File Description"
                                                    style={{ width: '100%', padding: '1px', marginTop: '10px', borderRadius: '4px', borderColor: 'cadetblue', borderWidth: '2px', border: "1px solid red" }}
                                                    name="Description"
                                                />

                                                <Stack spacing={2} direction="row" alignItems="center" >
                                                    <TextField

                                                        label="Email"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="FileName"
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <IconButton>
                                                                        <EmailIcon />
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Stack>
                                                <Stack spacing={2} direction="row" alignItems="center">
                                                    <label htmlFor="file-upload">
                                                        <IconButton color="primary" component="span">
                                                            <CloudUploadIcon fontSize="large" />
                                                        </IconButton>
                                                    </label>
                                                    <InputLabel htmlFor="file-upload" shrink style={{ fontWeight: 'bold' }}>{FileName}</InputLabel>
                                                    <Input
                                                        type="file"
                                                        inputProps={{ accept: '.pdf, .doc, .docx' }}
                                                        style={{ display: 'none' }}
                                                        id="file-upload"
                                                        placeholder={FileName}
                                                    />
                                                </Stack>
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="I agree to the terms and Conditions of College "
                                                />
                                                <Button type="submit" variant="contained" style={{ backgroundColor: 'cadetblue' }}>
                                                    Forward
                                                </Button>
                                            </Stack>
                                        </form>
                                    </Paper>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Complaint
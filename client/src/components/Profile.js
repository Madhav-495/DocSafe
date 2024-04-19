import React from 'react'
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
import Sidebars from '../components/Sidebars'
const Profile = () => {
    return (
        <>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 bg-gray-800 text-white p-4">
                    <Sidebars />
                </div>

                {/* Main Content */}
                <div className="w-3/4">
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center content-center flex-col ">
                            <Paper elevation={3} style={{ padding: '20px', width: '50%', margin: 'auto', marginTop: '50px', backgroundColor: '#454543', borderRadius: '20px' }} className='flex items-center justify-center flex-col '>
                                <img src="../images/profile.webp" alt="Profile" style={{ width: "20%", borderRadius: "50%" }} />
                                <h2 className='font-bold mt-6 text-white text-center sm:mb-3'>
                                    Madhav Agrawal
                                </h2>
                                <h3 className="text-white text-center mb-0 sm:mb-3">
                                    Computer Science and Engineering
                                </h3>
                                <h3 className="text-white sm:mb-3">
                                    20214232
                                </h3>
                                <div className='flex items-center justify-between mt-5 flex-col sm:flex-row '>
                                    <div className='flex flex-col items-center content-center ml-4'>
                                        <h4 className='font-bold text-white'>65</h4>
                                        <h5 className="text-white text-center">Friends</h5>
                                    </div>
                                    <div className='flex flex-col items-center content-center ml-4 rounded text-white'>
                                        <h4 className='font-bold text-white'>46</h4>
                                        <h5 className="text-white text-center">Complaints</h5>
                                    </div>
                                    <div className='flex flex-col items-center content-center ml-4 rounded text-white'>
                                        <h4 className='font-bold text-white'>24</h4>
                                        <h5 className='text-white text-center'>Documents</h5>
                                    </div>

                                </div>
                                <div className="mt-6">
                                    <Button type="submit" variant="contained" style={{ backgroundColor: 'cadetblue' }}>
                                        Update Password
                                    </Button>
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
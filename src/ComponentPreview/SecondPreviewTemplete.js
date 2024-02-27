import { Box, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function SecondPreviewTemplete({data}) {
    return (
        <div>
            <Box textAlign="center" mt={4}>
                <Typography variant="h4" component="div">
                    Your Title
                </Typography>
                <Typography variant="subtitle1" component="div">
                    Your Slogan
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {/* First Column (4/12) */}
                <Grid item xs={4}>
                    <div style={{ padding: '16px', background: '#001f3f', color: '#fff', borderRadius: "10px" }}>
                        {/* Profile Section */}
                        <Typography variant="h6">Profile</Typography>
                        <p>Write your profile description here...</p>

                        {/* Education Section */}
                        <Typography variant="h6">Education</Typography>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>
                                University of Allahabad
                                <span style={{ marginLeft: "8px", color: '#999', fontWeight: 'normal', fontSize: "10px" }}>
                                    2019-2022
                                </span>

                            </li>
                            <li>
                                <span style={{ color: '#999', fontWeight: 'normal', fontSize: "10px" }}>
                                    Master of Computer Applications - MCA (   2022)
                                </span>
                            </li>
                        </ul>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>
                                University of Allahabad
                                <span style={{ marginLeft: "8px", color: '#999', fontWeight: 'normal', fontSize: "10px" }}>
                                    2019-2022
                                </span>

                            </li>
                            <li>
                                <span style={{ color: '#999', fontWeight: 'normal', fontSize: "10px" }}>
                                    Master of Computer Applications - MCA (   2022)
                                </span>
                            </li>
                        </ul>

                        {/* Skills Section */}
                        <Typography variant="h6">Skills</Typography>
                        <List component="nav" dense>
                            {data.skills && data.skills.map((skill, index) => (
                                <ListItemButton key={index}>
                                    <ListItemText primary={skill.category} secondary={skill.skills} />
                                </ListItemButton>
                            ))}
                        </List>
                    </div>
                </Grid>

                {/* Divider */}
                {/* <Grid item xs={12}>
                    <Divider />
                </Grid> */}

                {/* Second Column (8/12) */}
                <Grid item xs={8}>
                    {/* Your content for the second column goes here */}
                    <div style={{ padding: '16px', background: '#f9f9f9' }}>
                        Second Column Content
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ResumeCard from '../components/ResumeCard';
import Chip from '@mui/material/Chip';
import { ListItem } from '@mui/material';
import { Button } from '@mui/material';

function ComponentPreview({ data }) {
    const pdfRef = useRef(null);

    const generatePdf = () => {
        const input = pdfRef.current;

        html2pdf(input);
    };

    return (
        <div className=''>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "25px" }}>
                <Chip
                    color='info'
                    label="Generate PDF"
                    style={{ marginLeft: "auto" }}
                    onClick={generatePdf}
                    sx={{ my: 4, fontSize: "15px" }}
                />
            </div>
            <div ref={pdfRef}>
                <Box>
                    <Grid container spacing={2} sx={{ px: 3 }}>
                        <Grid item xs={12} md={4} >
                            <ResumeCard style={data.leftStyle}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Avatar alt={data.contact.name} src={data.contact.avatar} sx={{ width: 100, height: 100 }} />
                                    <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                                        {data.contact.name}
                                    </Typography>
                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                        {data.contact.address}
                                    </Typography>
                                </Box>
                                <Divider sx={{ mt: 2 }} />
                                <List component="nav" dense>
                                    {data.contact.contacts.map((contact, index) => (
                                        <ListItemButton key={index}>
                                            <ListItemIcon>
                                                <contact.icon />
                                            </ListItemIcon>
                                            <ListItemText primary={contact.label} secondary={contact.value} />
                                        </ListItemButton>
                                    ))}
                                </List>
                                <Divider sx={{ mb: 2 }} />
                                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                                    Skills
                                </Typography>
                                <List component="nav" dense>
                                    {data.skills && data.skills.map((skill, index) => (
                                        <ListItemButton key={index}>
                                            <ListItemText primary={skill.category} secondary={skill.skills} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </ResumeCard>
                            <ResumeCard style={data.leftStyle}>
                                <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
                                    Social Media
                                </Typography>
                                <Box sx={{ mt: 2, textAlign: 'center' }}>
                                    {data.socialMedia.map((media, index) => (
                                        <IconButton color="primary" key={index}>
                                            <a href={media.url} target='_blank'><media.icon /> </a>
                                        </IconButton>
                                    ))}
                                </Box>
                            </ResumeCard>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <ResumeCard>
                                <Typography variant="h6" component="div">
                                    Education
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {data.education.map((edu, index) => (
                                        <React.Fragment key={index}>
                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="subtitle1">{edu.degree}</Typography>
                                                <Typography variant="body2" color="text.secondary">{edu.year}</Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    {edu.school}
                                                </Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    {edu.gpa}
                                                </Typography>
                                            </Box>
                                            {index !== data.education.length - 1 && (
                                                <Divider sx={{ mb: 2 }} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Box>
                            </ResumeCard>
                            <ResumeCard>
                                <Typography variant="h6" component="div">
                                    Work Experience
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {data.experience.map((experience, index) => (
                                        <React.Fragment key={index}>
                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="subtitle1">{experience.title}</Typography>
                                                <Typography variant="body2" color="text.secondary">{experience.dates}</Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    {experience.responsibilities}  {experience.company} ({experience.location})
                                                    <List>
                                                        {experience.responsibilities &&
                                                            experience.responsibilities.split('\n').map((responsibility, index) => (
                                                                <ListItem key={index} sx={{ m: 0, p: 0 }}>
                                                                    <Typography component="span" variant="body2" color="textSecondary">
                                                                        {`\u2022`} {responsibility} {/* Bullet point character */}
                                                                    </Typography>
                                                                </ListItem>
                                                            ))}
                                                    </List>
                                                </Typography>
                                            </Box>
                                            {index !== data.experience.length - 1 && (
                                                <Divider sx={{ mb: 2 }} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Box>
                            </ResumeCard>
                            <ResumeCard>
                                <Typography variant="h6" component="div">
                                    Projects
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {data.projects.map((project, index) => (
                                        <React.Fragment key={index}>
                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="subtitle1">{project.title}</Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    {project.description}
                                                </Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    {project.technologies.join(', ')}
                                                </Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    {project.link}
                                                </Typography>
                                            </Box>
                                            {index !== data.projects.length - 1 && (
                                                <Divider sx={{ mb: 2 }} />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Box>
                            </ResumeCard>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default ComponentPreview;

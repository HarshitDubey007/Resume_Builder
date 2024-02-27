import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Box from '@mui/material/Box';
import ComponetPreview from "./ComponentPreview/ComponetPreview";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ResumeCard from "./components/ResumeCard";
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ColorPicker from 'react-color';
import Select from 'react-select';
import { Button } from "@mui/material";


function CreateingComponent() {

    const [initialData, setInitialData] = useState({
        leftStyle: {
            background: "",
            color: ""
        },
        contact: {
            name: "",
            email: "",
            avatar: "",
            contacts: [
                { icon: PhoneIcon, label: "Phone", value: "" },
                { icon: EmailIcon, label: "Email", value: "" },
                { icon: HomeIcon, label: "Address", value: "" }
            ],
        },
        socialMedia: [
            { icon: GitHubIcon, url: "" },
            { icon: TwitterIcon, url: "" },
            { icon: LinkedInIcon, url: "" },
        ],
        education: [
            {
                degree: "",
                school: "",
                year: "",
                gpa: ""
            },
        ],
        experience: [
            {
                title: "",
                company: "",
                location: "",
                dates: "",
                responsibilities: ""
            }
        ],
        skills: [
            { category: "", skills: "" },
        ],
        projects: [
            {
                title: "",
                description: "",
                technologies: [],
                link: ""
            },
        ],
        additionalInformation: ""
    });



    useEffect(() => {

    }, []);

    const validationSchema = Yup.object({
        API_DATA: Yup.object(),
        projects: Yup.array().of(
            Yup.object().shape({
                title: Yup.string().required('Title is required'),
                description: Yup.string().required('Description is required'),
                technologies: Yup.array().of(Yup.string().required('Technology is required')),
                link: Yup.string(),
            })
        ),
    });

    const fonts = [
        { label: 'Arial', value: 'Arial, sans-serif' },
        { label: 'Times New Roman', value: 'Times New Roman, serif' },
        { label: 'Courier New', value: 'Courier New, monospace' },
        // Add more fonts as needed
    ];

    const onSubmit = (values, actions) => {

    };

    return (
        <Grid container spacing={2} >
            <ResumeCard>
                <Formik
                    initialValues={initialData}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(formik) => (
                        <div className="row">
                            <Grid item xs={12} md={4} style={{ padding: '16px', background: '#001f3f', color: '#fff', borderRadius: '10px', height: '100%', overflowY: 'auto' }}>
                                <Chip label="Create Your Resume in a simple way" color="success" sx={{ my: 3, mx: 3 }} />
                                <form style={{ padding: '16px', borderRadius: '10px', maxHeight: 'calc(100% - 80px)', overflowY: 'auto' }} onSubmit={formik.handleSubmit}>

                                    <ResumeCard sx={{ my: 3, mx: 3 }}>
                                        <Box>
                                            <TextField
                                                label="Background Color"
                                                type="text"
                                                name="leftStyle.background"
                                                onChange={formik.handleChange}
                                                value={formik.values.leftStyle.background}
                                            />
                                        </Box>
                                        <Box mt={2}>
                                            <TextField
                                                label="Text Color"
                                                type="text"
                                                name="leftStyle.color"
                                                onChange={formik.handleChange}
                                                value={formik.values.leftStyle.color}
                                            />
                                        </Box>
                                        <Box mt={2}>
                                            <ColorPicker
                                                label="Background Color"
                                                color={formik.values.leftStyle.background}
                                                onChange={(color) => formik.setFieldValue('leftStyle.background', color.hex)}
                                            />
                                        </Box>
                                        <Box mt={2}>
                                            <ColorPicker
                                                label="Text Color"
                                                color={formik.values.leftStyle.color}
                                                onChange={(color) => formik.setFieldValue('leftStyle.color', color.hex)}
                                            />
                                        </Box>
                                        {/* <Box mt={2}>
                                            <Select
                                                options={fonts}
                                                placeholder="Select Font"
                                                isSearchable
                                                value={fonts.find((font) => font.value === formik.values.leftStyle.font)}
                                                onChange={(selectedOption) => formik.setFieldValue('leftStyle.font', selectedOption?.value || '')}
                                            />
                                        </Box> */}
                                    </ResumeCard>


                                    <ResumeCard sx={{ my: 3, mx: 3 }}>
                                        <Chip label="Profile" size="medium" sx={{ fontSize: "20px" }} />
                                        <Box className="card-body p-3">
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        label="Name"
                                                        variant="standard"
                                                        type="text"
                                                        placeholder="Name"
                                                        fullWidth={10}
                                                        name="contact.name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.contact.name}
                                                        sx={{ fontSize: '14px', height: '20px' }}
                                                    />
                                                </Grid>
                                                {formik.values.contact.contacts.map((contact, index) => (
                                                    <Grid item xs={12} md={6} key={index}>
                                                        <TextField
                                                            label={contact.label}
                                                            variant="standard"
                                                            type="text"
                                                            placeholder={contact.label}
                                                            fullWidth
                                                            name={`contact.contacts[${index}].value`}
                                                            onChange={formik.handleChange}
                                                            value={formik.values.contact.contacts[index].value}
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </ResumeCard>

                                    {/* Skills */}
                                    <ResumeCard sx={{ my: 3, mx: 3 }}>
                                        <Chip label="skills" size="medium" sx={{ fontSize: "20px" }} />
                                        <Box className="card-body p-3">
                                            <Grid container spacing={2}>
                                                {formik.values.skills.map((skill, index) => (
                                                    <React.Fragment key={index}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                label="Category"
                                                                variant="standard"
                                                                type="text"
                                                                placeholder="Category"
                                                                fullWidth
                                                                name={`skills[${index}].category`}
                                                                onChange={formik.handleChange}
                                                                value={formik.values.skills[index].category}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                label="Skills"
                                                                variant="standard"
                                                                type="text"
                                                                placeholder="Skills"
                                                                fullWidth
                                                                name={`skills[${index}].skills`}
                                                                onChange={formik.handleChange}
                                                                value={formik.values.skills[index].skills}
                                                            />
                                                        </Grid>
                                                        {index === formik.values.skills.length - 1 && (
                                                            <Grid item xs={12}>
                                                                <Button
                                                                    variant="contained"
                                                                    color="primary"
                                                                    onClick={() => formik.setValues({ ...formik.values, skills: [...formik.values.skills, { skills: '', category: '' }] })}
                                                                >
                                                                    Add Educcation
                                                                </Button>
                                                            </Grid>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </ResumeCard>
                                    {/* Education */}
                                    <ResumeCard sx={{ my: 3, mx: 3 }}>
                                        <Box className="card-body p-3">
                                            <Chip label="Education" size="medium" sx={{ fontSize: "20px" }} />
                                            {formik.values.education.map((edu, index) => (
                                                <Grid container spacing={2} key={index} sx={{ my: 2 }}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Degree"
                                                            variant="standard"
                                                            fullWidth
                                                            name={`education[${index}].degree`}
                                                            onChange={formik.handleChange}
                                                            value={edu.degree}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="School"
                                                            variant="standard"
                                                            fullWidth
                                                            name={`education[${index}].school`}
                                                            onChange={formik.handleChange}
                                                            value={edu.school}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Year"
                                                            variant="standard"
                                                            fullWidth
                                                            name={`education[${index}].year`}
                                                            onChange={formik.handleChange}
                                                            value={edu.year}

                                                        />
                                                    </Grid>
                                                    {index === formik.values.education.length - 1 && (
                                                        <Grid item xs={12}>
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={() => formik.setValues({ ...formik.values, education: [...formik.values.education, { degree: '', school: '', year: '', gpa: '' }] })}
                                                            >
                                                                Add Educcation
                                                            </Button>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            ))}
                                        </Box>
                                    </ResumeCard>

                                    <ResumeCard sx={{ my: 3, mx: 3 }}>
                                        <Chip label="Experience" size="medium" sx={{ fontSize: "20px" }} />
                                        <Box className="card-body">
                                            {formik.values.experience.map((exp, index) => (
                                                <Grid container spacing={2} key={index} sx={{ my: 2 }}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Title"
                                                            variant="standard"
                                                            fullWidth
                                                            name={`experience[${index}].title`}
                                                            onChange={formik.handleChange}
                                                            value={exp.title}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Company"
                                                            variant="standard"
                                                            fullWidth
                                                            name={`experience[${index}].company`}
                                                            onChange={formik.handleChange}
                                                            value={exp.company}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Location"
                                                            variant="standard"
                                                            fullWidth
                                                            name={`experience[${index}].location`}
                                                            onChange={formik.handleChange}
                                                            value={exp.location}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Dates"
                                                            variant="standard"
                                                            fullWidth
                                                            name={`experience[${index}].dates`}
                                                            onChange={formik.handleChange}
                                                            value={exp.dates}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Responsibilities"
                                                            variant="standard"
                                                            fullWidth
                                                            multiline
                                                            rows={3}
                                                            name={`experience[${index}].responsibilities`}
                                                            onChange={formik.handleChange}
                                                            value={exp.responsibilities} />
                                                    </Grid>

                                                    {index === formik.values.experience.length - 1 && (
                                                        <Grid item xs={12}>
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={() => formik.setValues({ ...formik.values, experience: [...formik.values.experience, { title: '', company: '', location: '', dates: '', responsibilities: "" }] })}
                                                            >
                                                                Add Experience
                                                            </Button>
                                                        </Grid>
                                                    )}


                                                    {/* Languages */}
                                                    {/* <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Languages"
                                                            variant="standard"
                                                            fullWidth
                                                            name="languages"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.languages} // Join languages array into a string
                                                        />
                                                    </Grid>
                                                </Grid> */}

                                                    {/* Certifications */}
                                                    {/* <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            label="Certifications"
                                                            variant="standard"
                                                            fullWidth
                                                            name="certifications"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.certifications} // Join certifications array into a string
                                                        />
                                                    </Grid>
                                                </Grid> */}
                                                </Grid>

                                            ))}
                                        </Box>
                                    </ResumeCard>


                                    <ResumeCard sx={{ my: 3, mx: 3 }}>
                                        <Chip label="Projets" size="medium" sx={{ fontSize: '20px' }} />
                                        <Box className="card-body p-3">
                                            <Grid container spacing={2}>
                                                {formik.values.projects.map((project, index) => (
                                                    <Grid container spacing={2} key={index} sx={{ my: 3 }}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                label="Title"
                                                                variant="standard"
                                                                fullWidth
                                                                name={`projects[${index}].title`}
                                                                onChange={formik.handleChange}
                                                                value={formik.values.projects[index].title}
                                                                error={formik.touched.projects && Boolean(formik.errors.projects?.[index]?.title)}
                                                                helperText={formik.errors.projects?.[index]?.title}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                label="Description"
                                                                variant="standard"
                                                                fullWidth
                                                                name={`projects[${index}].description`}
                                                                onChange={formik.handleChange}
                                                                value={formik.values.projects[index].description}
                                                                error={formik.touched.projects && Boolean(formik.errors.projects?.[index]?.description)}
                                                                helperText={formik.errors.projects?.[index]?.description}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                label="Technologies"
                                                                variant="standard"
                                                                fullWidth
                                                                name={`projects[${index}].technologies`}
                                                                onChange={(e) => {
                                                                    formik.handleChange(e);
                                                                    // Ensure that technologies is always an array
                                                                    const technologies = e.target.value.split(',').map((tech) => tech.trim());
                                                                    formik.setFieldValue(`projects[${index}].technologies`, technologies);
                                                                }}
                                                                value={formik.values.projects[index].technologies.join(', ')}
                                                                error={formik.touched.projects && Boolean(formik.errors.projects?.[index]?.technologies)}
                                                                helperText={formik.errors.projects?.[index]?.technologies}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                label="Link"
                                                                variant="standard"
                                                                fullWidth
                                                                name={`projects[${index}].link`}
                                                                onChange={formik.handleChange}
                                                                value={formik.values.projects[index].link}
                                                                error={formik.touched.projects && Boolean(formik.errors.projects?.[index]?.link)}
                                                                helperText={formik.errors.projects?.[index]?.link}
                                                            />
                                                        </Grid>

                                                        {index === formik.values.projects.length - 1 && (
                                                            <Grid item xs={12}>
                                                                <Button
                                                                    variant="contained"
                                                                    color="primary"
                                                                    onClick={() => formik.setValues({ ...formik.values, projects: [...formik.values.projects, { title: '', description: '', technologies: [''], link: '' }] })}
                                                                >
                                                                    Add Projets
                                                                </Button>
                                                            </Grid>
                                                        )}
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>


                                    </ResumeCard>

                                    <ResumeCard sx={{ my: 3, mx: 3 }}>
                                        <Chip label="Social Media" size="medium" sx={{ fontSize: '20px' }} />
                                        <Box className="card-body p-3">
                                            <Grid container spacing={2}>
                                                {formik.values.socialMedia.map((platform, index) => (
                                                    <React.Fragment key={index}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                label="Platform"
                                                                variant="standard"
                                                                type="text"
                                                                placeholder="Platform"
                                                                fullWidth
                                                                name={`socialMedia[${index}].platform`}
                                                                onChange={formik.handleChange}
                                                                value={formik.values.socialMedia[index].platform}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                label="URL"
                                                                variant="standard"
                                                                type="text"
                                                                placeholder="URL"
                                                                fullWidth
                                                                name={`socialMedia[${index}].url`}
                                                                onChange={formik.handleChange}
                                                                value={formik.values.socialMedia[index].url}
                                                            />
                                                        </Grid>
                                                    </React.Fragment>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </ResumeCard>



                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                </form>
                            </Grid>
                            <Grid className="col-8">
                                <div className="mt-3">
                                    <ComponetPreview data={formik.values} />
                                </div>
                            </Grid>
                        </div>
                    )}
                </Formik>
            </ResumeCard>
        </Grid>
    );
}

export default CreateingComponent;

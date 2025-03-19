import { Container, Typography, Paper, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

interface SkillCategory {
    name: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend Development',
        skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Redux', 'Redux Toolkit'],
    },
    {
        name: 'Mobile Development',
        skills: ['React Native', 'Expo', 'Expo Router', 'Swift', 'Android Development'],
    },
    {
        name: 'Backend & Database',
        skills: ['Node.js', 'Python', 'SQL', 'MongoDB', 'AWS'],
    },
    {
        name: 'Development Tools',
        skills: ['Git', 'Docker', 'XCode', 'Visual Studio', 'Android Studio', 'Firebase Console'],
    },
    {
        name: 'Testing & Analytics',
        skills: ['Appium/Selenium', 'Optimizely', 'RudderStack', 'Iterable', 'AppsFlyer'],
    },
];

const Skills = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                    Technical Skills
                </Typography>
            </motion.div>

            <Box sx={{ mt: 4 }}>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
                            <Typography variant="h5" component="h2" color="primary" gutterBottom>
                                {category.name}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {category.skills.map((skill, i) => (
                                    <Chip
                                        key={i}
                                        label={skill}
                                        color="primary"
                                        variant="outlined"
                                        sx={{
                                            fontSize: '1rem',
                                            p: 0.5,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    </motion.div>
                ))}
            </Box>
        </Container>
    );
};

export default Skills; 
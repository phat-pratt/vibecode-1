import { Container, Typography, Paper, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';

interface ExperienceItem {
    title: string;
    company: string;
    date: string;
    location: string;
    points: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: 'Senior Software Engineer',
        company: 'Better Collective / The Action Network',
        date: 'FEB 2022 - PRESENT',
        location: 'New York, NY (Remote)',
        points: [
            "Developed and maintained features for Action's flagship iOS and Android react native applications (~500,000 MAU), implementing proactive testing and crash analytics to achieve 99% crash-free rate.",
            "Served as Scrum Master and lead-developer for a team of 8 consisting of engineers, designers and product manager; facilitated daily stand-ups, sprint planning, and retrospective ceremonies.",
            "Managed the release lifecycle and version control using GitFlow best practices, optimizing deployment processes.",
            "Developed a real-time animated play-by-play tracker for football and basketball game pages using Reanimated and React Native Skia.",
            "Mentored junior engineers through code reviews, pair programming and regular one-on-one meetings."
        ],
    },
    {
        title: 'Software Engineer',
        company: 'The Action Network',
        date: 'AUG 2020 - FEB 2022',
        location: 'New York, NY (Remote)',
        points: [
            "Engineered and implemented new features from proof of concept to production, translating technical specifications into scalable solutions.",
            "Refactored Action's mobile code base (Swift, Obj-C) to use React Native (TypeScript, Redux).",
            "Deployed changes to an API that offers real-time scores and sportsbook odds across all major sports leagues.",
            "Worked with business and product teams to quickly develop reliable, reusable features."
        ],
    },
    {
        title: 'Application Development Co-op',
        company: 'The SubZero Group',
        date: 'JAN 2019 - AUG 2019',
        location: 'Madison, WI',
        points: [
            "Programmed and architected the company's first automated testing framework for the Subzero, Wolf, and Cove public websites.",
            "Created automated solutions to update and maintain customer-facing and company-wide internal applications.",
            "Led all efforts to migrate years of JIRA records from a vender instance to a fresh internal JIRA instance.",
            "Trained two new Co-ops during the last quarter."
        ],
    },
];

const Experience = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                    Professional Experience
                </Typography>
            </motion.div>

            <Box sx={{ mt: 4 }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
                            <Typography variant="h5" component="h2" color="primary" gutterBottom>
                                {exp.title}
                            </Typography>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                {exp.company}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                {exp.date} | {exp.location}
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box component="ul" sx={{ pl: 2 }}>
                                {exp.points.map((point, i) => (
                                    <Typography
                                        key={i}
                                        component="li"
                                        variant="body1"
                                        sx={{ mb: 1 }}
                                    >
                                        {point}
                                    </Typography>
                                ))}
                            </Box>
                        </Paper>
                    </motion.div>
                ))}
            </Box>
        </Container>
    );
};

export default Experience; 
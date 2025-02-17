import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import { motion } from 'framer-motion';
import styled from 'styled-components'
import { projects } from './data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1100px;
   justify-content: center;
   align-items:center;
 @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;
`;

export default function MultiActionAreaCard() {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <Desc>Here are some of my projects...</Desc>
      <ProjectsGrid>
      {projects.map((project,index) => (
        

<motion.div key={index}

             initial={{ y: "20px", opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: projects.indexOf(project) * 0.3}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true,amount:0.1}}
            >
   <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
   <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
   <StyledCardMedia
  component="img"
  image={project.image}
  alt="flight"
/>
       <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: '48px', textAlign: 'center' }}>
           <ProjectTitle>{project.title}</ProjectTitle>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '64px', overflow: 'hidden' }}>
          {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Link href={project.link} underline='hover'>{project.title}</Link>
      </CardActions>
    </Card>
    </motion.div>
   // </ProjectCard>
        ))}
    </ProjectsGrid>
    </Container>
  );
}

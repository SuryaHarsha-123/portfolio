/*
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

export default function Skills(){
    return (
        <div>
          
        </div>
    );
}
    */



import React from 'react'
import styled from 'styled-components'
import { skills } from './data/constants'
import { Chip,Avatar } from '@mui/material';
import { motion } from 'framer-motion';


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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid #854ce6;
  border-radius: 16px;
  padding: 20px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// const SkillImage = styled.img`
//   width: 20px;
//   height: 20px;
// `;

const Skills = () => {
  return (
    //<motion.div animate={{y:100}}>
    <Container id="skills">
      <Title>Skills</Title>
      <Desc>Here are some of my skills on which I have been working...</Desc>
      <SkillsGrid>
        {skills.map((skillCategory, index) => (
          <SkillCard key={index}>
            <motion.div
             key={index}
             initial={{ y: "20px", opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: skills.indexOf(skillCategory) * 0.2 }}
             whileHover={{scale:1.3, y:-2}}
            >
            <SkillTitle>{skillCategory.title}</SkillTitle>
            <SkillList>
              {skillCategory.skills.map((item, idx) => (
                <SkillItem key={idx}>
                  <motion.div  whileHover={{scale:2}} 
                           key={idx}
                           initial={{ y: "-20px", opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ duration: 0.5, delay: skills.indexOf(item) * 0.2 }}
                         >
                  <Chip avatar={<Avatar src={item.image} alt={item.name}></Avatar>} label={item.name}
                  variant='outlined' size='medium' color='default'>
                  {/* <SkillImage src={item.image} alt={item.name} />
                  {item.name} */}
                  </Chip>
                  </motion.div>
                </SkillItem>
              ))}
            </SkillList>
            </motion.div>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Container>
    //</motion.div>
  );
};

export default Skills;

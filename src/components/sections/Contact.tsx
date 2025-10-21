

import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { fadeInUp } from "../../styles/animations";
import emailjs from "@emailjs/browser"


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_raxw8wa",    // replace with your EmailJS service ID
        "template_t4sc0sq",   // replace with your EmailJS template ID
        {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }   ,         // data to send
        "ehu0ZYhHwsDyrv7W4"     // replace with your EmailJS public key
      );

      console.log("Message sent:", result.text);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };
 

  return (
    <ContactSection id="contact">
      <DecorativeShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </DecorativeShapes>

      <Container>
        <SectionHeader>
          <SectionTitle>LET'S TALK</SectionTitle>
          <TitleUnderline />
        </SectionHeader>

        <ContentWrapper>
          <TextColumn>
            <InfoCard>
              <InfoTitle>Get in Touch</InfoTitle>
              <ContactText>
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say hi,
                feel free to reach out!
              </ContactText>
            </InfoCard>

            <ContactInfo>
              <ContactItem>
                <ContactLabel>📧 Email</ContactLabel>
                <ContactLink href="mailto:your.email@example.com">
                  ne_fekairi@esi.dz
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <ContactLabel>📍 Location</ContactLabel>
                <ContactValue>Algiers, Algeria</ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>🌐 Social</ContactLabel>
                <SocialLinks>
                  <SocialLink
                    href="https://github.com/elhassanefek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/el-hassane-fekairi-2088b0387/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </SocialLink>
                 
                </SocialLinks>
              </ContactItem>
            </ContactInfo>
          </TextColumn>

          <FormColumn>
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send a Message</FormTitle>
              
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                />
              </FormGroup>

              <Button type="submit" size="lg" fullWidth>
                Send Message
              </Button>
            </ContactForm>
          </FormColumn>
        </ContentWrapper>
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing["5xl"]} 0;
  background-color: #AEC6FF;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing["2xl"]} 0;
  }
`;

const DecorativeShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Shape1 = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 100px;
  height: 100px;
  background: #FFFACD;
  border: 5px solid #000;
  transform: rotate(45deg);
  box-shadow: 8px 8px 0 #000;
  animation: float 7s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: rotate(45deg) translateY(0px); }
    50% { transform: rotate(45deg) translateY(-20px); }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 90px;
  height: 90px;
  background: #FFB5E8;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 7px 7px 0 #000;
  animation: float 6s ease-in-out infinite 1s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 55px;
    height: 55px;
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const Shape3 = styled.div`
  position: absolute;
  top: 60%;
  left: 8%;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 87px solid #B4E7CE;
  filter: drop-shadow(7px 7px 0 #000);
  animation: float 8s ease-in-out infinite 2s;
  
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: -50px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 87px solid #000;
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid #B4E7CE;
    
    &::after {
      left: -30px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 52px solid #000;
    }
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
  background: #B4E7CE;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 5px solid #000;
  box-shadow: 8px 8px 0 #000;
  border-radius: 0;
  animation: ${fadeInUp} 0.8s ease-out;
  transition: all 0.3s ease;
  text-align: center;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    border-width: 4px;
    box-shadow: 6px 6px 0 #000;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    letter-spacing: 0.5px;
  }
`;

const TitleUnderline = styled.div`
  width: 120px;
  height: 6px;
  background: #000;
  margin: ${({ theme }) => theme.spacing.md} auto 0;
  border-radius: 0;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const TextColumn = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const InfoCard = styled.div`
  background: #FFF;
  border: 5px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  box-shadow: 10px 10px 0 #000;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 13px 13px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.xl};
    border-width: 4px;
    box-shadow: 7px 7px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg};
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: #000;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ContactItem = styled.div`
  background: #FFF;
  border: 4px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 6px 6px 0 #000;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.md};
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-width: 2px;
    box-shadow: 3px 3px 0 #000;
  }
`;

const ContactLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 800;
`;

const ContactLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #000;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;

  &:hover {
    text-decoration-thickness: 3px;
  }
`;

const ContactValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #000;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #000;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: #FFFACD;
  border: 3px solid #000;
  border-radius: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 3px 3px 0 #000;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-align: center;
  flex: 1 0 auto;
  min-width: 80px;
  box-sizing: border-box;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    border-width: 2px;
    min-width: 70px;
    box-shadow: 2px 2px 0 #000;
  }
`;

const FormColumn = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  background-color: #FFF;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border-radius: 0;
  border: 5px solid #000;
  box-shadow: 10px 10px 0 #000;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  margin-right : -2rem ;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 13px 13px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
    border-width: 4px;
    box-shadow: 7px 7px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg};
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 800;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 3px solid #000;
  border-radius: 0;
  background-color: #F5F5F5;
  color: #000;
  font-weight: 500;
  box-shadow: 4px 4px 0 #000;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    background-color: #FFF;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
  }

  &::placeholder {
    color: #666;
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-width: 2px;
    box-shadow: 3px 3px 0 #000;
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 3px solid #000;
  border-radius: 0;
  background-color: #F5F5F5;
  color: #000;
  font-weight: 500;
  resize: vertical;
  font-family: inherit;
  box-shadow: 4px 4px 0 #000;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  min-height: 150px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    background-color: #FFF;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
  }

  &::placeholder {
    color: #666;
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-width: 2px;
    box-shadow: 3px 3px 0 #000;
    min-height: 120px;
  }
`;
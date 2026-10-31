import React, { useState } from "react";
import styled, { css } from "styled-components";
import emailjs from "@emailjs/browser";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";
import { monoLabel, pressable } from "../../styles/mixins";
import { profile } from "../../data/profile";

// EmailJS identifiers (the public key is meant to be shipped to the browser).
const EMAILJS_SERVICE_ID = "service_raxw8wa";
const EMAILJS_TEMPLATE_ID = "template_t4sc0sq";
const EMAILJS_PUBLIC_KEY = "ehu0ZYhHwsDyrv7W4";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error" };

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/elhassanefek", href: profile.github },
  { label: "LinkedIn", value: "in/el-hassane-fekairi-2088b0387", href: profile.linkedin },
];

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ kind: "sending" });
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus({ kind: "sent" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ kind: "error" });
    }
  };

  return (
    <Section
      id="contact"
      index={6}
      label="Contact"
      title="Get in touch"
      intro="Internships, backend roles or a question about one of these projects: write to me."
    >
      <Grid>
        <Reveal>
          <Channels>
            {channels.map((c) => (
              <li key={c.label}>
                <Channel
                  href={c.href}
                  {...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <ChannelLabel>{c.label}</ChannelLabel>
                  <ChannelValue>{c.value}</ChannelValue>
                </Channel>
              </li>
            ))}
          </Channels>
        </Reveal>

        <Reveal delay={0.1}>
          <Form onSubmit={handleSubmit} aria-labelledby="contact-form-title">
            <FormTitle id="contact-form-title">Send a message</FormTitle>

            <Field>
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="contact-message">Message</Label>
              <TextArea
                id="contact-message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </Field>

            <Button type="submit" size="lg" fullWidth disabled={status.kind === "sending"}>
              {status.kind === "sending" ? "Sending…" : "Send message"}
            </Button>

            <StatusLine role="status" aria-live="polite" $kind={status.kind}>
              {status.kind === "sent" && "Message sent. I'll get back to you soon."}
              {status.kind === "error" &&
                `Couldn't send the message. Please try again or email ${profile.email}.`}
            </StatusLine>
          </Form>
        </Reveal>
      </Grid>
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const Channels = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Channel = styled.a`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  ${pressable("sm")}

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ChannelLabel = styled.span`
  ${monoLabel}
`;

const ChannelValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  overflow-wrap: anywhere;
`;

const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const FormTitle = styled.h3`
  margin: 0;
`;

const Field = styled.div`
  display: grid;
  gap: 6px;
`;

const Label = styled.label`
  ${monoLabel}
`;

const fieldStyles = css`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.paper};
  color: ${({ theme }) => theme.colors.ink};
  border: ${({ theme }) => theme.borders.base};
  border-radius: ${({ theme }) => theme.radii.none};
  line-height: ${({ theme }) => theme.lineHeights.normal};

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

const Input = styled.input`
  ${fieldStyles}
  min-height: 48px;
`;

const TextArea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
`;

const StatusLine = styled.p<{ $kind: Status["kind"] }>`
  ${monoLabel}
  margin: 0;
  text-transform: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ${({ $kind, theme }) =>
    ($kind === "sent" || $kind === "error") &&
    css`
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      border: ${theme.borders.base};
      background-color: ${$kind === "sent" ? theme.colors.status.success : theme.colors.status.danger};
      color: ${theme.colors.ink};
    `}
`;

export default Contact;

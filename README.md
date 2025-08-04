# Isaac Ndung'u – Developer Portfolio 🚀

This is a modern and interactive personal developer portfolio built using **Next.js**, **React**, **Framer Motion**, and **Three.js (via CubeViewer and StaticScene)**. It showcases skills, experience, and projects, complete with animated typewriter text, a 3D tech stack cube, and a visually engaging workspace scene.

## 🌟 Features

- ⚙️ **Interactive Hero Section** – Introduces the developer using typewriter animation and a visually styled hero image.
- 🧠 **What I Do Section** – Details development expertise, AI/ML focus, and personal philosophy.
- 🧰 **Tech Stack Visualization** – 3D rotating cube and categorized list of technologies.
- 🖼️ **Project Showcase** – Dynamic section showcasing past projects.
- 📞 **Contact Section** – Contact form or call-to-action for collaboration.
- 🎨 **Stylized UI** – Beautiful layout using Tailwind CSS with smooth transitions via Framer Motion.

---

## 📁 Project Structure

```bash
.
├── app/
│   ├── components/
│   │   ├── header.tsx
│   │   ├── techstackRender.tsx  # Renders the CubeViewer
│   │   ├── workspace.tsx        # Renders 3D developer workspace
│   │   ├── contactPage.tsx
│   │   └── projects.tsx
│   ├── page.tsx                 # Main page with layout and sections
│   └── ...
├── public/
│   ├── hero_image_fade_transparent.png
│   ├── your_cv.pdf              # Make sure to place your actual CV here
│   └── ...
├── styles/
│   └── globals.css              # Global styles if used
├── README.md
└── ...

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Md Farhan Rza</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          DevOps Engineer | Cloud Enthusiast | Full Stack Developer
        </p>

        <p className="mt-4 max-w-3xl text-gray-400">
          I build scalable cloud infrastructure, automate deployments with
          CI/CD, manage Kubernetes clusters, and develop modern web
          applications using React, Next.js, Docker, Kubernetes, AWS, and
          Terraform.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/farhanlabs"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-black"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20">
        <h2 className="mb-8 text-center text-4xl font-bold">Skills</h2>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "Linux",
            "Docker",
            "Kubernetes",
            "Terraform",
            "AWS",
            "GitHub Actions",
            "Jenkins",
            "ArgoCD",
            "Prometheus",
            "Grafana",
            "React",
            "Next.js",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl bg-zinc-900 p-4 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-zinc-950 px-6 py-20">
        <h2 className="mb-10 text-center text-4xl font-bold">Projects</h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-zinc-900 p-6">
            <h3 className="text-2xl font-semibold">SecureCart</h3>
            <p className="mt-3 text-gray-400">
              End-to-end DevSecOps pipeline using GitHub Actions, Docker,
              Kubernetes, Terraform, AWS, SonarQube and Trivy.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h3 className="text-2xl font-semibold">Portfolio Website</h3>
            <p className="mt-3 text-gray-400">
              Modern responsive portfolio built with Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h3 className="text-2xl font-semibold">Web Development Agency</h3>
            <p className="mt-3 text-gray-400">
              Delivered multiple production websites with deployment, SEO and
              cloud hosting.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="flex flex-col items-center px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold">Let's Connect</h2>

        <p className="mt-4 text-gray-400">
          Open to DevOps, Cloud and Software Engineering opportunities.
        </p>

        <div className="mt-8 space-y-2">
          <p>📧 your-email@example.com</p>
          <p>💻 github.com/farhanlabs</p>
          <p>📍 Bihar, India</p>
        </div>
      </section>
    </main>
  );
}
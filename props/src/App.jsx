import BasicProps from "./components/BasicProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/ThemeToggler.jsx";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav>
      <div>
        {sections.map((section) => (
          <button key={section.id} type="button">
            <span>{section.icon} </span>
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div>
      <Navigation />

      <header>
        <h1>React Props Explained</h1>
        <p>A simple guide to understanding props in React.</p>
        <p>Current theme: {isDark ? "Dark" : "Light"}</p>
      </header>

      <main>
        <section id="basic">
          <BasicProps />
        </section>
        <section id="children">
          <ChildrenProps />
        </section>
        <section id="complex">
          <ComplexProps />
        </section>
        <section id="ref">
          <RefProps />
        </section>
        <section id="theme">
          <ThemeToggler />
        </section>
      </main>

      <footer>
        <small>Made with React and Vite</small>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

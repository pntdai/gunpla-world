import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import { Link } from "react-router-dom";

export function Home() {
  const modules = [
    {
      title: "Scam Checker",
      description: "Search and view scammer records",
      path: "/scam-checker",
      icon: "🔍",
      color: "bg-statusScam/10 border-statusScam/20",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Gunpla World Platform
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          A micro-frontend platform for managing community safety tools
        </p>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {modules.map((module) => (
          <Card key={module.path} className={module.color}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{module.icon}</span>
                <CardTitle className="text-xl">{module.title}</CardTitle>
              </div>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to={module.path}>
                <Button className="w-full" variant="default">
                  Open {module.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

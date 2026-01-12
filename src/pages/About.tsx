import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-[880px]">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-8"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          {/* Header */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I'm a product designer passionate about creating intuitive, 
              beautiful experiences that solve real problems.
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  With over 12 years of experience in product design, I've had the privilege 
                  of working with startups and enterprise companies alike, helping them 
                  transform complex problems into elegant solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My approach combines user-centered design principles with a deep 
                  understanding of business goals. I believe that great design isn't just 
                  about making things look beautiful—it's about creating meaningful 
                  experiences that resonate with users and drive measurable results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not designing, you can find me traveling, gaming, gardening, 
                  walking my two yellow labs, studying Japanese, or experimenting with 
                  illustration and motion design in my personal projects.
                </p>
              </div>
              
              {/* Experience Section */}
              <div className="pt-8 space-y-6">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6 space-y-1">
                    <h3 className="font-semibold">Lead Product Designer</h3>
                    <p className="text-primary">CoStar Group</p>
                    <p className="text-sm text-muted-foreground">2018 - Present</p>
                  </div>
                  <div className="border-l-2 border-border pl-6 space-y-1">
                    <h3 className="font-semibold">Senior UI/UX Designer</h3>
                    <p className="text-muted-foreground">CBS Interactive</p>
                    <p className="text-sm text-muted-foreground">2017 - 2018</p>
                  </div>
                  <div className="border-l-2 border-border pl-6 space-y-1">
                    <h3 className="font-semibold">Senior Product Designer</h3>
                    <p className="text-muted-foreground">CoStar Group</p>
                    <p className="text-sm text-muted-foreground">2013 - 2017</p>
                  </div>
                  <div className="border-l-2 border-border pl-6 space-y-1">
                    <h3 className="font-semibold">UI/UX Designer</h3>
                    <p className="text-muted-foreground">Tapsense</p>
                    <p className="text-sm text-muted-foreground">2012 - 2013</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-muted/30 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["User Research & Testing", "UI Design", "Responsive Design", "Mobile Design", "AI Design", "Prototyping", "Figma", "Sketch", "Adobe Creative Suite", "Motion Graphics", "Illustration", "Vibe Coding", "Prompt Engineering", "HTML/CSS"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-background border border-border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold">Education</h3>
                <div className="space-y-1">
                  <p className="font-medium">BS Visual Communications</p>
                  <p className="text-sm text-muted-foreground">San Francisco State University</p>
                  <p className="text-sm text-muted-foreground">2009 - 2011</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold">Certifications</h3>
                <div className="space-y-1">
                  <p className="font-medium">UI/UX Design for AI Products</p>
                  <p className="text-sm text-muted-foreground">Stanford University</p>
                  <p className="text-sm text-muted-foreground">2025</p>
                </div>
              </div>
              
              {/* Hidden for now - uncomment to restore
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RefreshCcw, Plus, Search } from 'lucide-react'
import { Sidebar } from "@/app/component/sidebar"
import { GrStorage } from "react-icons/gr"

const repositories = [
  {
    name: "design-system",
    status: "Public",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago"
  },
  {
    name: "codeant-ci-app",
    status: "Private",
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago"
  },
  {
    name: "analytics-dashboard",
    status: "Private",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago"
  },
  {
    name: "mobile-app",
    status: "Public",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago"
  },
  {
    name: "e-commerce-platform",
    status: "Private",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago"
  },
  {
    name: "blog-website",
    status: "Public",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago"
  },
  {
    name: "social-network",
    status: "Private",
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago"
  }
]

const languageColors: { [key: string]: string } = {
  React: "bg-[#1570EF]",
  Javascript: "bg-[#1570EF]",
  Python: "bg-[#1570EF]",
  Swift: "bg-[#1570EF]",
  Java: "bg-[#1570EF]",
  "HTML/CSS": "bg-[#1570EF]",
  PHP: "bg-[#1570EF]"
}

export default function RepositoriesPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className=" ml-60 flex-1 bg-white p-6">
        <div className=" ">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <p className="text-sm text-muted-foreground">33 total repositories</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Refresh All
              </Button>
              <Button className="gap-2 bg-[#1570EF]">
                <Plus className="h-4 w-4 ]" />
                Add Repository
              </Button>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4  -translate-y-1/2 text-gray-500" />
            <Input 
              placeholder="Search Repositories" 
              className="pl-10 w-[20rem]"
            />
          </div>

          <div className="space-y-4">
            {repositories.map((repo) => (
              <Card key={repo.name} className="flex hover:bg-[#F5F5F5] items-center justify-between p-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{repo.name}</span>
                    <Badge variant="secondary" className="text-xs bg-[#EFF8FF] border-[#B2DDFF] rounded-full text-[#175CD3]">
                      {repo.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{repo.language}</span>
                    <span className={`inline-block h-2 w-2 rounded-full ${languageColors[repo.language]}`} />
                    <GrStorage  className="text-xs ml-3"/>
                    
                    <span className="text-sm text-muted-foreground">{repo.size}</span>
                    <span className="text-sm text-muted-foreground ml-5">Updated {repo.updatedAt}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}


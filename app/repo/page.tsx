"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RefreshCcw, Plus, Search,} from 'lucide-react'
import { Sidebar } from "@/app/component/sidebar"
import { GrStorage } from "react-icons/gr"
import { repositories } from "@/lib/data"
import { languageColors } from "@/lib/data"



export default function RepositoriesPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
   
      <Sidebar />

      <main className="flex-1 bg-[#F5F5F5] p-4 overflow-hidden smml-60">
        <div className="h-full border rounded-xl bg-white">
       
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <p className="text-sm text-muted-foreground">
                33 total repositories
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Refresh All
              </Button>
              <Button className="gap-2 bg-[#1570EF]">
                <Plus className="h-4 w-4" />
                Add Repository
              </Button>
            </div>
          </div>

          <div className="relative mb-2 p-3">
            <Search className="absolute left-3 top-1/2 h-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Search Repositories" className="pl-10 w-full max-w-[20rem]" />
          </div>

          <div className="overflow-auto h-[calc(100%-10rem)]">
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="flex hover:bg-[#F5F5F5] border items-center justify-between p-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{repo.name}</span>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-[#EFF8FF] border-[#B2DDFF] rounded-full text-[#175CD3]"
                    >
                      {repo.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{repo.language}</span>
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${languageColors[repo.language]}`}
                    />
                    <GrStorage className="text-xs ml-3" />
                    <span className="text-sm text-muted-foreground">{repo.size}</span>
                    <span className="text-sm text-muted-foreground ml-5">
                      Updated {repo.updatedAt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
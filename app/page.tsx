"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaArrowUp, FaBitbucket, FaGithub, FaGitlab } from "react-icons/fa";
import { HiMiniChartPie } from "react-icons/hi2";
import ant from "./assets/Subtract2.png";
import Bant from "./assets/Subtract.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { VscAzureDevops, VscKey } from "react-icons/vsc";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("saas");

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-full justify-center">
          <Card className="w-[25rem]">
            <CardHeader className="border border- ">
              <CardTitle className="flex items-center gap-2">
                <Image src={ant} alt="ant" width={20} height={20} />
                AI to detect & Autofix bad code
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center text-center mt-3">
              <p className="flex flex-col font-bold">
                30+
                <span className="font-normal">Language Support</span>{" "}
              </p>
              <p className="flex flex-col font-bold">
                10K+
                <span className="font-normal">Developers</span>
              </p>
              <p className="flex flex-col font-bold">
                100K+
                <span className="font-normal">Hours Saved</span>
              </p>
            </CardContent>
          </Card>

          <Card className="w-[17rem] absolute top-[29rem] left-[22rem]">
            <CardHeader className="">
              <CardTitle className=" flex justify-between">
                <p>
                  <HiMiniChartPie className="rounded-full h-10 text-[#9D90FA]  w-10 bg-purple-200 text-sm" />
                </p>
                <div className="flex flex-col">
                  <p className="flex text-md text-[#0049C6]">
                    <FaArrowUp className="text-sm" />
                    14%
                  </p>
                  <p className="text-sm text-gray-400">This week</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between items-start text-center">
              <p className="text-sm">Issue Fixed</p>
              <p className="text-3xl font-bold">500K+</p>
            </CardContent>
          </Card>
        </div>
        <div className="absolute left-0 bottom-0">
          <Image src={Bant} alt="bigant" width={225} height={50} />
        </div>

        <div className="bg-[#FAFAFA] h-screen w-full flex flex-col justify-center items-center">
          <div
            className={`bg-[#FFFFFF] flex flex-col justify-center items-center w-[25rem] p-3 rounded-lg transition-all duration-300 ${
              activeTab === "saas" ? "h-[30rem]" : "h-[20rem]"
            }`}
          >
            <div className="">
              <p className="flex justify-center items-center gap-2">
                <Image src={ant} alt="ant" width={20} height={20} />
                CodeAnt AI
              </p>
              <p className="font-semibold text-2xl">Welcome to CodeAnt AI</p>
            </div>
            <Tabs
              defaultValue="saas"
              onValueChange={(value) => setActiveTab(value)}
              className="w-full"
            >
              <TabsList className="flex justify-center mb-2">
                <TabsTrigger value="saas" className="w-40">
                  SAAS
                </TabsTrigger>
                <TabsTrigger value="self" className="w-40">
                  Self Hosted
                </TabsTrigger>
              </TabsList>

              {/* Separator aligned with Tabs */}
              <Separator className="w-full bg-[#E9EAEB] my-2" />

              <TabsContent
                value="saas"
                className="p-4 flex flex-col gap-3 text-lg font-semibold "
              >
                <button className="border p-2 rounded-md flex justify-center items-center gap-2">
                  <FaGithub /> Sign in with Github
                </button>
                <button className="border p-2 rounded-md flex justify-center items-center gap-2">
                  <FaBitbucket className="text-blue-500" />
                  Sign in with bitbucket
                </button>
                <button className="border p-2 rounded-md flex justify-center items-center gap-2">
                  <VscAzureDevops className="text-blue-500" />
                  Sign in with Azure Devops
                </button>
                <button className="border p-2 rounded-md flex justify-center items-center gap-2">
                  <FaGitlab />
                  Sign in with Gitlab
                </button>
              </TabsContent>
              <TabsContent
                value="self"
                className="p-4 flex flex-col gap-3 text-lg font-semibold"
              >
                <button className="border p-2 rounded-md flex justify-center items-center gap-2">
                  <FaGitlab />
                  Self Hosted GitLab
                </button>
                <button className="border p-2 rounded-md flex justify-center items-center gap-2">
                  <VscKey />
                  Hosted SSO
                </button>
              </TabsContent>
            </Tabs>
          </div>
          <p className="text-sm mt-4">
            By signing up you agree to the{" "}
            <span className="font-semibold"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </>
  );
}

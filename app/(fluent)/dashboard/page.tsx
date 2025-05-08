"use client";

import { useState } from "react";
import { Button, Input, Avatar, Text } from "@fluentui/react-components";
import {
  Search24Regular,
  AppsRegular,
  SettingsRegular,
  QuestionCircle24Regular,
  Home24Regular,
  Earth24Regular,
  Document24Regular,
  List24Regular,
  Add24Regular,
  ChevronRight24Regular,
  BookmarkRegular,
  StarRegular,
  StarFilled,
  DocumentRegular,
} from "@fluentui/react-icons";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const imageCdn = (path: string) =>
  `https://registry-demo-microsoft.vercel.app/${path}`;

export default function SharePointDashboard() {
  const [followedSites, setFollowedSites] = useState([
    { id: 1, name: "Mint Condition Crunch Cookie", starred: true },
    { id: 2, name: "Kevin Cookie Company Hub", starred: true },
    { id: 3, name: "Cookie recipes", starred: true },
    { id: 4, name: "Company Files", starred: true },
    { id: 5, name: "Cookie Monster", starred: true },
  ]);

  const [recentSites, setRecentSites] = useState([
    { id: 6, name: "Mint Condition Crunch Cookie", starred: false },
    { id: 7, name: "Order Fulfillment", starred: false },
    { id: 8, name: "Kevin Cookie Company Hub", starred: true },
    { id: 9, name: "Mint Condition Crunch Cookie", starred: true },
    { id: 10, name: "Communication site", starred: false },
  ]);

  const [frequentSites, setFrequentSites] = useState([
    {
      id: 11,
      name: "Mint Condition Crunch Cookie Launch",
      type: "Group",
      color: "#6B7780",
      initials: "MC",
      starred: false,
      activities: [
        { type: "viewed", page: "Home", time: "1 hour ago", hasAvatar: true },
        {
          type: "viewed",
          page: "New Team Members",
          time: "1 hour ago",
          hasAvatar: true,
        },
        {
          type: "popular",
          page: "Mint Condition Crunch Cookie Launch Plan",
          hasAvatar: false,
        },
      ],
    },
    {
      id: 12,
      name: "Mint Condition Crunch Cookie Launch 2",
      type: "Group",
      color: "#B7472A",
      initials: "MC",
      starred: true,
      activities: [
        { type: "viewed", page: "Home", time: "2 hours ago", hasAvatar: true },
      ],
    },
    {
      id: 13,
      name: "Communication site",
      type: "",
      color: "#4F6BED",
      initials: "Cs",
      starred: false,
      activities: [
        { type: "viewed", page: "news", time: "3 hours ago", hasAvatar: true },
        { type: "viewed", page: "Home", time: "3 hours ago", hasAvatar: true },
      ],
    },
    {
      id: 14,
      name: "Kevin Cookie Company Hub",
      type: "Group",
      color: "#498205",
      initials: "KC",
      starred: true,
      activities: [
        {
          type: "viewed",
          page: "Common Customer Questions...Answered!",
          time: "1 hour ago",
          hasAvatar: true,
        },
        { type: "popular", page: "Employee Handbook", hasAvatar: false },
        { type: "viewed", page: "Home", time: "2 hours ago", hasAvatar: true },
      ],
    },
  ]);

  const toggleStar = (
    siteId: number,
    section: "followed" | "recent" | "frequent",
  ) => {
    if (section === "followed") {
      setFollowedSites(
        followedSites.map((site) =>
          site.id === siteId ? { ...site, starred: !site.starred } : site,
        ),
      );
    } else if (section === "recent") {
      setRecentSites(
        recentSites.map((site) =>
          site.id === siteId ? { ...site, starred: !site.starred } : site,
        ),
      );
    } else {
      setFrequentSites(
        frequentSites.map((site) =>
          site.id === siteId ? { ...site, starred: !site.starred } : site,
        ),
      );
    }
  };

  return (
    <div
      className="flex flex-col h-screen"
      style={{ fontFamily: '"Segoe UI", Arial, sans-serif' }}
    >
      {/* Top Navigation Bar */}
      <header className="flex items-center px-4 py-2 bg-[#0078d4] text-white">
        <div className="flex items-center">
          <AppsRegular className="h-6 w-6 mr-4" />
          <span className="text-xl font-semibold">SharePoint</span>
        </div>
        <div className="flex-1 mx-4">
          <div className="relative">
            <Search24Regular className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              className="w-full pl-10 bg-white text-black rounded-md"
              placeholder="Search in SharePoint"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button appearance="transparent" icon={<SettingsRegular />} />
          <Button appearance="transparent" icon={<QuestionCircle24Regular />} />
          <Avatar
            name="User"
            size={32}
            className="cursor-pointer"
            image={{ src: imageCdn("vibrant-street-market.png") }}
          />
        </div>
      </header>

      {/* Main Content with Sidebars */}
      <div className="flex flex-1 overflow-hidden">
        {/* Icon Navigation - Full Height */}
        <nav className="w-12 bg-white border-r flex flex-col items-center py-4">
          <button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <Home24Regular className="text-gray-600" />
          </button>
          <button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <Earth24Regular className="text-gray-600" />
          </button>
          <button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <Document24Regular className="text-gray-600" />
          </button>
          <button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <List24Regular className="text-gray-600" />
          </button>
          <button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <Add24Regular className="text-gray-600" />
          </button>
        </nav>

        {/* Right Content Area */}
        <div className="flex flex-col flex-1">
          {/* Command Bar - Now only spans the right content area */}
          <div className="flex items-center px-4 py-2 bg-[#f3f2f1] border-b">
            <Button appearance="transparent" icon={<Add24Regular />}>
              Create site
            </Button>
            <Button appearance="transparent" icon={<Add24Regular />}>
              Create news post
            </Button>
          </div>

          {/* Content Area with Left Navigation and Main Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left Navigation */}
            <nav className="w-80 bg-white border-r overflow-y-auto">
              <div className="p-4">
                <div className="mt-8">
                  <Text as="h2" size={500} weight="medium" className="mb-2">
                    Following
                  </Text>
                  <ul>
                    {followedSites.map((site) => (
                      <li
                        key={site.id}
                        className="flex items-center py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
                      >
                        <span className="flex-1">{site.name}</span>
                        <button
                          onClick={() => toggleStar(site.id, "followed")}
                          className="text-[#038387]"
                        >
                          {site.starred ? <StarFilled /> : <StarRegular />}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#0078d4] mt-2 hover:underline">
                    See all
                  </button>
                </div>

                {/* Recent Section */}
                <div className="mt-8">
                  <Text as="h2" size={500} weight="medium" className="mb-2">
                    Recent
                  </Text>
                  <ul>
                    {recentSites.map((site) => (
                      <li
                        key={site.id}
                        className="flex items-center py-2 hover:bg-gray-100 rounded px-2 cursor-pointer"
                      >
                        <span className="flex-1">{site.name}</span>
                        <button
                          onClick={() => toggleStar(site.id, "recent")}
                          className="text-[#038387]"
                        >
                          {site.starred ? <StarFilled /> : <StarRegular />}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#0078d4] mt-2 hover:underline">
                    See all
                  </button>
                </div>
              </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto bg-[#f5f5f5]">
              {/* Hero Section */}
              <div
                className="relative p-8 flex"
                style={{
                  backgroundImage:
                    "url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/herobackground-1600x616-365076?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=4000&hei=1540&qlt=100&fmt=png-alpha&fit=constrain')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="max-w-md z-10 flex flex-col items-start">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#e1f2f2] text-[#038387] border border-[#038387] mb-6">
                    Preview
                  </span>
                  <Text
                    as="h1"
                    size={800}
                    weight="medium"
                    className="mb-8 text-white"
                  >
                    Create, share, and track your pages from one single place
                  </Text>
                  <Button
                    appearance="primary"
                    className="mt-2"
                    style={{
                      backgroundColor: "#038387",
                      borderColor: "#038387",
                    }}
                    icon={<ChevronRight24Regular />}
                    iconPosition="after"
                  >
                    Go to pages
                  </Button>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
              </div>

              {/* News Section */}
              <div className="p-8">
                <Text as="h2" size={600} weight="medium" className="mb-6 pb-2">
                  News from sites
                </Text>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  {/* News Card 1 */}
                  <div className="bg-[#0078d4] rounded-lg overflow-hidden shadow-sm text-white">
                    <div className="h-48 relative">
                      <Image
                        src={imageCdn("business-document-outside.png")}
                        alt="News"
                        width={800}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4 flex flex-col">
                      <Text
                        as="h3"
                        size={500}
                        weight="medium"
                        className="mb-3 text-white"
                      >
                        News from sites
                      </Text>
                      <Text size={300} className="text-white">
                        Here you'll see news from sites you follow or visit
                        frequently and other news suggested by the Microsoft
                        Graph.
                      </Text>
                    </div>
                  </div>

                  {/* News Card 2 */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="h-48 relative">
                      <Image
                        src={imageCdn("tranquil-sunset.png")}
                        alt="Communication site"
                        width={800}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4 flex flex-col">
                      <Badge className="mb-3 bg-[#038387] text-white self-start">
                        COMMUNICATION SITE
                      </Badge>
                      <Text as="h3" size={500} weight="medium" className="mb-4">
                        news
                      </Text>
                      <div className="flex items-start">
                        <Avatar
                          name="Kevin Stratvert"
                          size={32}
                          className="mr-3"
                          image={{
                            src: imageCdn("/vibrant-street-market.png"),
                          }}
                        />
                        <div className="flex flex-col">
                          <Text weight="medium">Kevin Stratvert</Text>
                          <Text size={200} className="text-gray-500">
                            2 hours ago
                          </Text>
                        </div>
                      </div>
                      <div className="mt-4 text-gray-500">
                        <Text size={200}>3 views</Text>
                      </div>
                      <div className="mt-2">
                        <BookmarkRegular className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Frequent Sites Section */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <Text as="h2" size={600} weight="medium">
                      Frequent sites
                    </Text>
                    <button className="text-[#0078d4] hover:underline">
                      See all
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {frequentSites.map((site) => (
                      <div
                        key={site.id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                      >
                        {/* Colored Header with Initials and Star */}
                        <div
                          className="h-12 relative flex items-center"
                          style={{ backgroundColor: site.color }}
                        >
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 w-16 h-16 flex items-center justify-center">
                            <Text className="text-white text-xl font-medium">
                              {site.initials}
                            </Text>
                          </div>
                          <button
                            onClick={() => toggleStar(site.id, "frequent")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                          >
                            {site.starred ? (
                              <StarFilled className="h-5 w-5" />
                            ) : (
                              <StarRegular className="h-5 w-5" />
                            )}
                          </button>
                        </div>

                        {/* Site Info */}
                        <div className="p-4">
                          <Text
                            as="h3"
                            size={400}
                            weight="medium"
                            className="mb-1"
                          >
                            {site.name}
                          </Text>
                          {site.type && (
                            <Text size={300} className="text-gray-500 mb-4">
                              {site.type}
                            </Text>
                          )}

                          {/* Activity List */}
                          <div className="mt-4 space-y-3">
                            {site.activities.map((activity, index) => (
                              <div key={index} className="flex items-start">
                                {activity.hasAvatar ? (
                                  <Avatar
                                    name="User"
                                    size={32}
                                    className="mr-3"
                                    image={{
                                      src: imageCdn(
                                        "vibrant-street-market.png",
                                      ),
                                    }}
                                  />
                                ) : (
                                  <div className="w-8 h-8 mr-3 bg-gray-100 rounded flex items-center justify-center">
                                    <DocumentRegular className="text-gray-500" />
                                  </div>
                                )}
                                <div>
                                  {activity.type === "viewed" ? (
                                    <Text size={300}>
                                      You viewed{" "}
                                      <span className="font-medium">
                                        {activity.page}
                                      </span>{" "}
                                      {activity.time}
                                    </Text>
                                  ) : (
                                    <Text size={300}>
                                      <span className="font-medium">
                                        {activity.page}
                                      </span>{" "}
                                      is popular
                                    </Text>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

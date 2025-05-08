"use client";

import { useState } from "react";
import { Button } from "@zendeskgarden/react-buttons";
import { Input } from "@zendeskgarden/react-forms";
import { Avatar } from "@zendeskgarden/react-avatars";
import { Chrome } from "@zendeskgarden/react-chrome";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { Notification } from "@zendeskgarden/react-notifications";
import { Tag } from "@zendeskgarden/react-tags";
import {
  Search,
  LayoutGrid,
  Settings,
  HelpCircle,
  Home,
  Globe,
  FileText,
  List,
  Plus,
  ChevronRight,
  Bookmark,
  Star,
} from "lucide-react";
import Image from "next/image";

const imageCdn = (path: string) =>
  `https://registry-demo-microsoft.vercel.app/${path}`;

const UserAvatar = ({ src }: { src: string }) => (
  <Avatar>
    <img src={src} alt="User" className="w-full h-full object-cover" />
  </Avatar>
);

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
    <Chrome>
      {/* Top Navigation Bar */}
      <div className="flex items-center px-4 py-2 bg-[#0078d4] text-white">
        <div className="flex items-center">
          <LayoutGrid className="h-6 w-6 mr-4" />
          <span className="text-xl font-semibold">SharePoint</span>
        </div>
        <div className="flex-1 mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              className="w-full pl-10 bg-white text-black rounded-md"
              placeholder="Search in SharePoint"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button>
            <Settings className="h-5 w-5" />
          </Button>
          <Button>
            <HelpCircle className="h-5 w-5" />
          </Button>
          <UserAvatar src={imageCdn("vibrant-street-market.png")} />
        </div>
      </div>

      {/* Main Content with Sidebars */}
      <div className="flex flex-1 overflow-hidden">
        {/* Icon Navigation - Full Height */}
        <nav className="w-12 bg-white border-r flex flex-col items-center py-4">
          <Button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <Home className="h-5 w-5 text-gray-600" />
          </Button>
          <Button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <Globe className="h-5 w-5 text-gray-600" />
          </Button>
          <Button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <FileText className="h-5 w-5 text-gray-600" />
          </Button>
          <Button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <List className="h-5 w-5 text-gray-600" />
          </Button>
          <Button className="p-2 mb-4 hover:bg-gray-100 rounded-md">
            <Plus className="h-5 w-5 text-gray-600" />
          </Button>
        </nav>

        {/* Right Content Area */}
        <div className="flex flex-col flex-1">
          {/* Command Bar */}
          <div className="flex items-center px-4 py-2 bg-[#f3f2f1] border-b">
            <Button>
              <Plus className="h-5 w-5 mr-2" />
              Create site
            </Button>
            <Button>
              <Plus className="h-5 w-5 mr-2" />
              Create news post
            </Button>
          </div>

          {/* Content Area with Left Navigation and Main Content */}
          <Grid>
            <Row>
              {/* Left Navigation */}
              <Col size={3}>
                <nav className="bg-white border-r overflow-y-auto">
                  <div className="p-4">
                    <div className="mt-8">
                      <h2 className="text-lg font-medium mb-2">Following</h2>
                      <ul>
                        {followedSites.map((site) => (
                          <li key={site.id} className="flex items-center py-2 hover:bg-gray-100 rounded px-2 cursor-pointer">
                            <span className="flex-1">{site.name}</span>
                            <Button onClick={() => toggleStar(site.id, "followed")}>
                              {site.starred ? <Star className="h-5 w-5 fill-current" /> : <Star className="h-5 w-5" />}
                            </Button>
                          </li>
                        ))}
                      </ul>
                      <Button>See all</Button>
                    </div>

                    <div className="mt-8">
                      <h2 className="text-lg font-medium mb-2">Recent</h2>
                      <ul>
                        {recentSites.map((site) => (
                          <li key={site.id} className="flex items-center py-2 hover:bg-gray-100 rounded px-2 cursor-pointer">
                            <span className="flex-1">{site.name}</span>
                            <Button onClick={() => toggleStar(site.id, "recent")}>
                              {site.starred ? <Star className="h-5 w-5 fill-current" /> : <Star className="h-5 w-5" />}
                            </Button>
                          </li>
                        ))}
                      </ul>
                      <Button>See all</Button>
                    </div>
                  </div>
                </nav>
              </Col>

              {/* Main Content Area */}
              <Col size={9}>
                {/* Hero Section */}
                <Notification type="info">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#e1f2f2] text-[#038387] border border-[#038387] mb-6">
                      Preview
                    </span>
                    <h1 className="text-2xl font-medium mb-8">
                      Create, share, and track your pages from one single place
                    </h1>
                    <Button>
                      Go to pages
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </Notification>

                {/* News Section */}
                <Grid>
                  <Row>
                    <Col size={6}>
                      <Notification type="info">
                        <Image
                          src={imageCdn("business-document-outside.png")}
                          alt="News"
                          width={800}
                          height={400}
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-medium mb-3">News from sites</h3>
                          <p>
                            Here you'll see news from sites you follow or visit
                            frequently and other news suggested by the Microsoft
                            Graph.
                          </p>
                        </div>
                      </Notification>
                    </Col>
                    <Col size={6}>
                      <Notification>
                        <Image
                          src={imageCdn("tranquil-sunset.png")}
                          alt="Communication site"
                          width={800}
                          height={400}
                        />
                        <div className="p-4">
                          <Tag>COMMUNICATION SITE</Tag>
                          <h3 className="text-lg font-medium mb-4">news</h3>
                          <div className="flex items-start">
                            <UserAvatar src={imageCdn("/vibrant-street-market.png")} />
                            <div>
                              <p className="font-medium">Kevin Stratvert</p>
                              <p className="text-sm text-gray-500">2 hours ago</p>
                            </div>
                          </div>
                          <p className="mt-4 text-sm text-gray-500">3 views</p>
                          <Button className="mt-2">
                            <Bookmark className="h-5 w-5" />
                          </Button>
                        </div>
                      </Notification>
                    </Col>
                  </Row>
                </Grid>

                {/* Frequent Sites Section */}
                <Grid>
                  <Row>
                    <Col>
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-medium">Frequent sites</h2>
                        <Button>See all</Button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {frequentSites.map((site) => (
                      <Col key={site.id} size={3}>
                        <Notification>
                          <div style={{ backgroundColor: site.color }} className="h-12 relative flex items-center">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 w-16 h-16 flex items-center justify-center">
                              <span className="text-white text-xl font-medium">{site.initials}</span>
                            </div>
                            <Button
                              onClick={() => toggleStar(site.id, "frequent")}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                            >
                              {site.starred ? <Star className="h-5 w-5 fill-current" /> : <Star className="h-5 w-5" />}
                            </Button>
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-medium mb-1">{site.name}</h3>
                            {site.type && <p className="text-sm text-gray-500 mb-4">{site.type}</p>}
                            {site.activities.map((activity, index) => (
                              <div key={index} className="flex items-start mt-4">
                                {activity.hasAvatar ? (
                                  <UserAvatar src={imageCdn("vibrant-street-market.png")} />
                                ) : (
                                  <div className="w-8 h-8 mr-3 bg-gray-100 rounded flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-gray-500" />
                                  </div>
                                )}
                                <div>
                                  {activity.type === "viewed" ? (
                                    <p className="text-sm">
                                      You viewed <span className="font-medium">{activity.page}</span> {activity.time}
                                    </p>
                                  ) : (
                                    <p className="text-sm">
                                      <span className="font-medium">{activity.page}</span> is popular
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </Notification>
                      </Col>
                    ))}
                  </Row>
                </Grid>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </Chrome>
  );
}

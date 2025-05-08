"use client";

import { useState } from "react";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import {
  Table,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row as TableRow,
  Cell,
} from "@zendeskgarden/react-tables";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";
import {
  BarChart3,
  Home,
  Users,
  ShoppingCart,
  Settings,
  Bell,
  Search,
  ChevronDown,
  HelpCircle,
  LogOut,
  Layers,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Clock,
  User,
  MoreHorizontal,
} from "lucide-react";

// Navigation items
const navItems = [
  { icon: Home, label: "Dashboard" },
  { icon: Users, label: "Customers" },
  { icon: ShoppingCart, label: "Orders" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

// Dropdown menu items
const userMenuItems = [
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
  { label: "Help & Support", icon: HelpCircle },
  { label: "Logout", icon: LogOut, className: "text-red-500" },
];

// Sample data for table
const tableData = [
  {
    id: 1,
    customer: "John Doe",
    product: "Premium Plan",
    date: "2023-05-08",
    status: "Completed",
    amount: "$120.00",
  },
  {
    id: 2,
    customer: "Jane Smith",
    product: "Basic Plan",
    date: "2023-05-07",
    status: "Pending",
    amount: "$59.99",
  },
  {
    id: 3,
    customer: "Robert Johnson",
    product: "Enterprise Plan",
    date: "2023-05-06",
    status: "Completed",
    amount: "$299.99",
  },
  {
    id: 4,
    customer: "Emily Davis",
    product: "Premium Plan",
    date: "2023-05-05",
    status: "Failed",
    amount: "$120.00",
  },
  {
    id: 5,
    customer: "Michael Wilson",
    product: "Basic Plan",
    date: "2023-05-04",
    status: "Completed",
    amount: "$59.99",
  },
];

// Chart data
const revenueData = [
  { name: "Jan", revenue: 4000, profit: 2400, expenses: 1600 },
  { name: "Feb", revenue: 3000, profit: 1600, expenses: 1400 },
  { name: "Mar", revenue: 6000, profit: 3200, expenses: 2800 },
  { name: "Apr", revenue: 8000, profit: 4800, expenses: 3200 },
  { name: "May", revenue: 5000, profit: 2800, expenses: 2200 },
  { name: "Jun", revenue: 9000, profit: 5400, expenses: 3600 },
  { name: "Jul", revenue: 11000, profit: 6600, expenses: 4400 },
];

const salesCategoryData = [
  { name: "Electronics", value: 4000 },
  { name: "Clothing", value: 3000 },
  { name: "Home", value: 2000 },
  { name: "Beauty", value: 2780 },
  { name: "Sports", value: 1890 },
  { name: "Books", value: 2390 },
];

const ordersData = [
  { name: "Jan", orders: 120, returns: 8 },
  { name: "Feb", orders: 145, returns: 12 },
  { name: "Mar", orders: 190, returns: 15 },
  { name: "Apr", orders: 210, returns: 18 },
  { name: "May", orders: 180, returns: 14 },
  { name: "Jun", orders: 230, returns: 20 },
  { name: "Jul", orders: 250, returns: 22 },
];

const customerData = [
  { name: "Jan", total: 1200, active: 800, new: 120 },
  { name: "Feb", total: 1320, active: 850, new: 145 },
  { name: "Mar", total: 1465, active: 900, new: 190 },
  { name: "Apr", total: 1655, active: 950, new: 210 },
  { name: "May", total: 1865, active: 1000, new: 180 },
  { name: "Jun", total: 2045, active: 1100, new: 230 },
  { name: "Jul", total: 2275, active: 1200, new: 250 },
];

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Sidebar - Custom implementation */}
      <div
        className={`bg-white shadow-md transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center">
            <Layers className="text-blue-600" size={24} />
            {sidebarOpen && (
              <span className="ml-2 font-bold text-lg">Dashboard</span>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronDown
              className={`transform ${sidebarOpen ? "rotate-0" : "rotate-180"}`}
              size={18}
            />
          </button>
        </div>

        {/* Custom navigation menu */}
        <div className="p-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`w-full mb-1 p-2 rounded flex items-center ${
                activeNavItem === index
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveNavItem(index)}
            >
              <item.icon
                size={20}
                className={
                  activeNavItem === index ? "text-blue-600" : "text-gray-600"
                }
              />
              {sidebarOpen && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="relative w-64">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Custom dropdown implementation instead of Zendesk Garden Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User size={16} className="text-gray-600" />
                </div>
                <span className="ml-2">Admin User</span>
                <ChevronDown
                  size={16}
                  className={userMenuOpen ? "transform rotate-180" : ""}
                />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-white rounded-md shadow-lg z-10 border">
                  <div className="py-1">
                    {userMenuItems.map((item, index) => (
                      <button
                        key={index}
                        className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${item.className || ""}`}
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <item.icon size={16} className="mr-2" />
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

          {/* Stats Cards */}
          <Grid>
            <Row className="gap-4">
              <Col sm={6} md={3}>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Revenue</p>
                      <h3 className="text-2xl font-bold">$24,560</h3>
                      <p className="text-xs text-green-500 flex items-center mt-1">
                        <TrendingUp size={14} className="mr-1" /> +2.5% from
                        last month
                      </p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <DollarSign size={24} className="text-blue-600" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Orders</p>
                      <h3 className="text-2xl font-bold">1,245</h3>
                      <p className="text-xs text-green-500 flex items-center mt-1">
                        <TrendingUp size={14} className="mr-1" /> +15% from last
                        month
                      </p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <ShoppingBag size={24} className="text-green-600" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Customers</p>
                      <h3 className="text-2xl font-bold">5,678</h3>
                      <p className="text-xs text-green-500 flex items-center mt-1">
                        <TrendingUp size={14} className="mr-1" /> +8% from last
                        month
                      </p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Users size={24} className="text-purple-600" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Avg. Order Value</p>
                      <h3 className="text-2xl font-bold">$86.40</h3>
                      <p className="text-xs text-red-500 flex items-center mt-1">
                        <TrendingUp
                          size={14}
                          className="mr-1 transform rotate-180"
                        />{" "}
                        -1.2% from last month
                      </p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Clock size={24} className="text-orange-600" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>

          {/* Charts */}
          <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
            <TabList>
              <Tab item="overview">Overview</Tab>
              <Tab item="sales">Sales</Tab>
              <Tab item="customers">Customers</Tab>
            </TabList>
            <TabPanel item="overview" className="pt-4">
              <div className="flex flex-col space-y-6">
                {/* First row of charts */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      Revenue Overview
                    </h3>
                    <div className="h-80">
                      <div className="w-full h-full">
                        <svg className="w-full h-full">
                          <g transform="translate(40,20)">
                            {/* X and Y axes */}
                            <line
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />
                            <line
                              x1="0"
                              y1="240"
                              x2="500"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />

                            {/* X-axis labels */}
                            {revenueData.map((d, i) => (
                              <text
                                key={i}
                                x={i * (500 / (revenueData.length - 1))}
                                y="260"
                                textAnchor="middle"
                                fontSize="12"
                                fill="#64748b"
                              >
                                {d.name}
                              </text>
                            ))}

                            {/* Y-axis labels */}
                            {[0, 4000, 8000, 12000].map((value, i) => (
                              <text
                                key={i}
                                x="-10"
                                y={240 - (value / 12000) * 240}
                                textAnchor="end"
                                fontSize="12"
                                fill="#64748b"
                                dominantBaseline="middle"
                              >
                                ${value}
                              </text>
                            ))}

                            {/* Revenue line */}
                            <path
                              d={`M${revenueData.map((d, i) => `${i * (500 / (revenueData.length - 1))},${240 - (d.revenue / 12000) * 240}`).join(" L")}`}
                              fill="none"
                              stroke="#3182ce"
                              strokeWidth="2"
                            />

                            {/* Revenue data points */}
                            {revenueData.map((d, i) => (
                              <circle
                                key={i}
                                cx={i * (500 / (revenueData.length - 1))}
                                cy={240 - (d.revenue / 12000) * 240}
                                r="4"
                                fill="#3182ce"
                              />
                            ))}

                            {/* Profit line */}
                            <path
                              d={`M${revenueData.map((d, i) => `${i * (500 / (revenueData.length - 1))},${240 - (d.profit / 12000) * 240}`).join(" L")}`}
                              fill="none"
                              stroke="#38a169"
                              strokeWidth="2"
                            />

                            {/* Profit data points */}
                            {revenueData.map((d, i) => (
                              <circle
                                key={i}
                                cx={i * (500 / (revenueData.length - 1))}
                                cy={240 - (d.profit / 12000) * 240}
                                r="4"
                                fill="#38a169"
                              />
                            ))}

                            {/* Legend */}
                            <rect
                              x="350"
                              y="10"
                              width="12"
                              height="12"
                              fill="#3182ce"
                            />
                            <text x="370" y="20" fontSize="12" fill="#64748b">
                              Revenue
                            </text>
                            <rect
                              x="350"
                              y="30"
                              width="12"
                              height="12"
                              fill="#38a169"
                            />
                            <text x="370" y="40" fontSize="12" fill="#64748b">
                              Profit
                            </text>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      Sales by Category
                    </h3>
                    <div className="h-80">
                      <div className="w-full h-full">
                        <svg className="w-full h-full">
                          <g transform="translate(40,20)">
                            {/* X and Y axes */}
                            <line
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />
                            <line
                              x1="0"
                              y1="240"
                              x2="500"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />

                            {/* Bars */}
                            {salesCategoryData.map((d, i) => (
                              <g key={i}>
                                <rect
                                  x={i * (500 / salesCategoryData.length) + 10}
                                  y={240 - (d.value / 4000) * 240}
                                  width={500 / salesCategoryData.length - 20}
                                  height={(d.value / 4000) * 240}
                                  fill="#3182ce"
                                  rx="4"
                                />
                                <text
                                  x={
                                    i * (500 / salesCategoryData.length) +
                                    500 / salesCategoryData.length / 2
                                  }
                                  y="260"
                                  textAnchor="middle"
                                  fontSize="12"
                                  fill="#64748b"
                                >
                                  {d.name}
                                </text>
                              </g>
                            ))}

                            {/* Y-axis labels */}
                            {[0, 1000, 2000, 3000, 4000].map((value, i) => (
                              <text
                                key={i}
                                x="-10"
                                y={240 - (value / 4000) * 240}
                                textAnchor="end"
                                fontSize="12"
                                fill="#64748b"
                                dominantBaseline="middle"
                              >
                                ${value}
                              </text>
                            ))}
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second row of charts */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      Monthly Orders
                    </h3>
                    <div className="h-80">
                      <div className="w-full h-full">
                        <svg className="w-full h-full">
                          <g transform="translate(40,20)">
                            {/* X and Y axes */}
                            <line
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />
                            <line
                              x1="0"
                              y1="240"
                              x2="500"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />

                            {/* Bars */}
                            {ordersData.map((d, i) => (
                              <g key={i}>
                                <rect
                                  x={i * (500 / ordersData.length) + 10}
                                  y={240 - (d.orders / 250) * 240}
                                  width={500 / ordersData.length - 20}
                                  height={(d.orders / 250) * 240}
                                  fill="#38b2ac"
                                  rx="4"
                                />
                                <text
                                  x={
                                    i * (500 / ordersData.length) +
                                    500 / ordersData.length / 2
                                  }
                                  y="260"
                                  textAnchor="middle"
                                  fontSize="12"
                                  fill="#64748b"
                                >
                                  {d.name}
                                </text>
                              </g>
                            ))}

                            {/* Y-axis labels */}
                            {[0, 50, 100, 150, 200, 250].map((value, i) => (
                              <text
                                key={i}
                                x="-10"
                                y={240 - (value / 250) * 240}
                                textAnchor="end"
                                fontSize="12"
                                fill="#64748b"
                                dominantBaseline="middle"
                              >
                                {value}
                              </text>
                            ))}

                            {/* Legend */}
                            <rect
                              x="350"
                              y="10"
                              width="12"
                              height="12"
                              fill="#38b2ac"
                            />
                            <text x="370" y="20" fontSize="12" fill="#64748b">
                              Orders
                            </text>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      Customer Growth
                    </h3>
                    <div className="h-80">
                      <div className="w-full h-full">
                        <svg className="w-full h-full">
                          <g transform="translate(40,20)">
                            {/* X and Y axes */}
                            <line
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />
                            <line
                              x1="0"
                              y1="240"
                              x2="500"
                              y2="240"
                              stroke="#e2e8f0"
                              strokeWidth="1"
                            />

                            {/* X-axis labels */}
                            {customerData.map((d, i) => (
                              <text
                                key={i}
                                x={i * (500 / (customerData.length - 1))}
                                y="260"
                                textAnchor="middle"
                                fontSize="12"
                                fill="#64748b"
                              >
                                {d.name}
                              </text>
                            ))}

                            {/* Y-axis labels */}
                            {[0, 500, 1000, 1500, 2000, 2500].map(
                              (value, i) => (
                                <text
                                  key={i}
                                  x="-10"
                                  y={240 - (value / 2500) * 240}
                                  textAnchor="end"
                                  fontSize="12"
                                  fill="#64748b"
                                  dominantBaseline="middle"
                                >
                                  {value}
                                </text>
                              ),
                            )}

                            {/* Total customers line */}
                            <path
                              d={`M${customerData.map((d, i) => `${i * (500 / (customerData.length - 1))},${240 - (d.total / 2500) * 240}`).join(" L")}`}
                              fill="none"
                              stroke="#805ad5"
                              strokeWidth="2"
                            />

                            {/* Total customers data points */}
                            {customerData.map((d, i) => (
                              <circle
                                key={i}
                                cx={i * (500 / (customerData.length - 1))}
                                cy={240 - (d.total / 2500) * 240}
                                r="4"
                                fill="#805ad5"
                              />
                            ))}

                            {/* Active customers line */}
                            <path
                              d={`M${customerData.map((d, i) => `${i * (500 / (customerData.length - 1))},${240 - (d.active / 2500) * 240}`).join(" L")}`}
                              fill="none"
                              stroke="#38a169"
                              strokeWidth="2"
                            />

                            {/* Active customers data points */}
                            {customerData.map((d, i) => (
                              <circle
                                key={i}
                                cx={i * (500 / (customerData.length - 1))}
                                cy={240 - (d.active / 2500) * 240}
                                r="4"
                                fill="#38a169"
                              />
                            ))}

                            {/* Legend */}
                            <rect
                              x="350"
                              y="10"
                              width="12"
                              height="12"
                              fill="#805ad5"
                            />
                            <text x="370" y="20" fontSize="12" fill="#64748b">
                              Total
                            </text>
                            <rect
                              x="350"
                              y="30"
                              width="12"
                              height="12"
                              fill="#38a169"
                            />
                            <text x="370" y="40" fontSize="12" fill="#64748b">
                              Active
                            </text>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel item="sales" className="pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Sales Data</h3>
                <p>Sales content goes here</p>
              </div>
            </TabPanel>
            <TabPanel item="customers" className="pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Customer Data</h3>
                <p>Customer content goes here</p>
              </div>
            </TabPanel>
          </Tabs>

          {/* Recent Transactions Table */}
          <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Transactions</h3>
              <button className="text-blue-600 text-sm hover:underline">
                View All
              </button>
            </div>
            <Table>
              <Head>
                <HeaderRow>
                  <HeaderCell>ID</HeaderCell>
                  <HeaderCell>Customer</HeaderCell>
                  <HeaderCell>Product</HeaderCell>
                  <HeaderCell>Date</HeaderCell>
                  <HeaderCell>Status</HeaderCell>
                  <HeaderCell>Amount</HeaderCell>
                  <HeaderCell>Actions</HeaderCell>
                </HeaderRow>
              </Head>
              <Body>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <Cell>#{row.id}</Cell>
                    <Cell>{row.customer}</Cell>
                    <Cell>{row.product}</Cell>
                    <Cell>{row.date}</Cell>
                    <Cell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : row.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </Cell>
                    <Cell>{row.amount}</Cell>
                    <Cell>
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <MoreHorizontal size={16} />
                      </button>
                    </Cell>
                  </TableRow>
                ))}
              </Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

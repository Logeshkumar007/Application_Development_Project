// import Image from "next/image"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import MapComponent from "../../oldComponents/BookRide/Map";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Map() {
  const profile = useSelector((state) => state.loginReducer);
  const rideId = useSelector((state) => state.selectedIdReducer);
  // const [rideDetails, setRideDetails] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/app/bookride/selectedValue/${rideId.idSelected}`
      )
      .then((response) => {
        {
          console.log("Rider details ", response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log("The ride details", rideDetails);
  }, []);

  useEffect(() => {
    console.log("the profile", profile);
  }, [profile]);
  useEffect(() => {
    console.log("the ridedetails", rideId);
  }, [rideId]);

  // sampleSubmit();
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle>
                    {profile.firstName + " " + profile.lastName}
                  </CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Year of Studying : {profile.yearOfStudy}
                  </CardDescription>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Contact No:{profile.phoneNumber}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Rate your experience</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription></CardDescription>
                  <CardTitle className="text-2xl">Eligable for Ride</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=" text-muted-foreground text-green-800 font-bold text-2xl">
                    Verified
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Proximity to Driver</CardDescription>
                  <CardTitle className="text-xs">
                    Distance between driver and passanger should be displayed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Location</CardTitle>
                    <CardDescription>
                      Current location of an pilot approximately.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <div></div>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    {/* Date : {rideDetails.date} */}
                  </CardTitle>

                  {/* <CardDescription>{rideDetails.date}</CardDescription> */}
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Track Order
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold"> Ride Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Leaving From :
                      </span>
                      {/* {<span>{rideDetails.data.leaving}</span>} */}
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Going To:</span>
                      {/* {<span>{rideDetails.data.going}</span>} */}
                    </li>
                  </ul>

                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Available Seats:
                      </span>
                      {/* <span>{rideDetails.data.availableSeats}</span> */}
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Car Name:</span>
                      {/* <span>{rideDetails.data.carName}</span> */}
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Car Number:</span>
                      {/* <span>{rideDetails.data.carNumber}</span> */}
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">
                        Expected Price:
                      </span>
                      {/* <span>${rideDetails.data.price}</span> */}
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="grid gap-3">
                    <div className="font-semibold">Pilot Details:</div>
                    <address className="grid  not-italic text-muted-foreground p-5 m">
                      {/* <div className="m-1">Name : {rideDetails.data.name}</div> */}
                      <div className="m-1">
                        {/* Email : {rideDetails.data.email} */}
                      </div>
                      <div className="m-1">
                        {/* Phone Number: {rideDetails.data.phone} */}
                      </div>
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

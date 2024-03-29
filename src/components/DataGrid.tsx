"use client";
import { formatPrice } from "@/lib/formatter";
import { motion } from "framer-motion";
import { ItemType } from "@/data/Data";
import Container from "./Container";
import { useState } from "react";
import { PaginationSection } from "./PaginationSection";
interface DataGridProps {
  data: ItemType[];
}
import pant1 from "@/assets/dress1.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const DataGrid = ({ data }: DataGridProps) => {
  const [pagedData, setPagedData] = useState<ItemType[]>(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = pagedData?.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="p-7">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {currentItems?.map((item) => {
            const price = formatPrice(item.price);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.3 }}
              >
                <Link href={`/${item.category}/${item.id}`}>
                  <Card className="flex flex-col w-full items-center bg-secondary text-secondary-foreground rounded-xl">
                    <CardHeader className="flex flex-co; items-center">
                      <CardTitle className="font-bold text-3xl">
                        {item.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="relative overflow-hidden h-[300px] aspect-square mx-auto">
                        <Image fill alt="photo" src={item.image} />
                      </div>
                      <CardDescription className="text-center pt-4">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <p className="text-yellow-500 font-bold text-xl">
                        {price}
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <PaginationSection
          ItemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItem={data?.length}
        />
      </Container>
    </div>
  );
};

export default DataGrid;

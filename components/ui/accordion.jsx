"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion({ children, ...props }) {
  return <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item className={cn("border-b last:border-b-0", className)} {...props} />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="size-4 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content className="overflow-hidden text-sm" {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

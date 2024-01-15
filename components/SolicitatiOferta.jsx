"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SolicitatiOfertaForm from "./SolicitatiOfertaForm";

export function SolicitatiOferta({customStyle}) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='orange' className={` ${customStyle}`}>Solicitați o ofertă</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <SolicitatiOfertaForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='orange' className={` ${customStyle}`}>Solicitați o ofertă</Button>
      </DrawerTrigger>
      <DrawerContent>
        <SolicitatiOfertaForm onClose={() => setOpen(false)}/>
      </DrawerContent>
    </Drawer>
  );
}

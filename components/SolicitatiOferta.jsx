"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import SolicitatiOfertaForm from "./SolicitatiOfertaForm";

export function SolicitatiOferta({ customStyle }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const handleClose = () => setOpen(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="orange" className={`${customStyle}`}>
            Solicitați o ofertă
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle className="hidden">Solicitati o oferta</DialogTitle>
          <SolicitatiOfertaForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="orange" className={` ${customStyle}`}>
          Solicitați o ofertă
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="hidden">Solicitati o oferta</DrawerTitle>
        <SolicitatiOfertaForm onClose={handleClose} />
      </DrawerContent>
    </Drawer>
  );
}

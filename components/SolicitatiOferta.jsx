"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SolicitatiOfertaForm from "./SolicitatiOfertaForm";

export function SolicitatiOferta({ className = "", customStyle }) {
  const [open, setOpen] = useState(false);
  const style = className || customStyle || "";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={`button-primary ${style}`}>Solicită o ofertă <ArrowRight size={16} /></button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] w-[calc(100%_-_1.5rem)] max-w-3xl overflow-y-auto rounded-3xl border-white/10 bg-[#15181a] p-0 text-white shadow-2xl sm:rounded-3xl">
        <DialogHeader className="sr-only"><DialogTitle>Solicită o ofertă</DialogTitle><DialogDescription>Completează formularul pentru a solicita o ofertă.</DialogDescription></DialogHeader>
        <SolicitatiOfertaForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

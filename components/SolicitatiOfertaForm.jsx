"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DrawerClose } from "./ui/drawer";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import GoogleCaptchaWrapper from "@/app/GoogleCaptchaWrapper";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

const formSchema = z.object({
  nume: z.string().min(3, {
    message: "Min 3 caractere",
  }),
  prenume: z.string().min(3, {
    message: "Min 3 caractere",
  }),
  email: z.string().email(),
  telefon: z.string().min(10, {
    message: "Introduceti numarul",
  }),
  mesaj: z.string().max(200, {
    message: "Max 200 caractere.",
  }),
  constructie: z.optional(z.string()),
  judet: z.optional(z.string()),
  inceput: z.optional(z.string()),
});

export default function SolicitatiOfertaForm({ onClose }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nume: "",
      prenume: "",
      email: "",
      telefon: "",
      mesaj: "",
      constructie: "",
      judet: "",
      inceput: "",
    },
  });
  const { toast } = useToast();
  const [constructie, setConstructie] = useState("");
  const [judet, setJudet] = useState("");
  const [inceput, setInceput] = useState("");

  useEffect(() => {
    form.setValue("constructie", constructie);
    form.setValue("judet", judet);
    form.setValue("inceput", inceput);
  }, [constructie, judet, inceput, form.setValue]);

  // RECAPTCHA
  const captchaSubmit = async () => {
    if (!executeRecaptcha) {
      console.error("ReCAPTCHA not ready");
      throw new Error("ReCAPTCHA not ready");
    }
    const gRecaptchaToken = await executeRecaptcha("InquirySubmit");
    // Verify the token on the backend in this endpoint
    const response = await axios.post("/api/recaptchaSubmit", {
      gRecaptchaToken,
    });

    if (response.data.success) {
      // Return the token if verification is successful
      return gRecaptchaToken;
    } else {
      // Throw an error if verification fails
      throw new Error("Failed to verify reCAPTCHA");
    }
  };

  const onSubmit = async (formData) => {
    try {
      // Await the captchaSubmit function to complete and get the token
      const gRecaptchaToken = await captchaSubmit();

      // Check if the gRecaptchaToken is not undefined or null before proceeding
      if (!gRecaptchaToken) {
        // Handle the case where gRecaptchaToken is not received properly
        toast({
          title: "Captcha verification failed",
          description: "Please complete the captcha to submit the form.",
        });
        return; // Exit the function as we don't have a valid token
      }

      // Include the reCAPTCHA token in your submission data
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, gRecaptchaToken }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Mulțumim pentru interesul acordat!",
          description: "Vă vom contacta cât mai curând!",
        });
        form.reset(); // This will reset the form to defaultValues specified in useForm
      } else {
        toast({
          title: "Ceva nu a mers bine!",
          description: data.message || "Vă rugăm să încercați mai târziu!",
        });
      }
    } catch (error) {
      toast({
        title: "Ceva nu a mers bine!",
        description: error.message || "Vă rugăm să încercați mai târziu!",
      });
    }
  };

  return (
    <>
      <GoogleCaptchaWrapper>
        <div className="xl:max-w-lg lg:max-w-md md:max-w-sm mx-auto p-6 bg-grey rounded-lg overflow-auto relative">
          <div className="fixed top-2 right-0 left-0 mx-auto bg-white/10 rounded-full h-[0.6rem] w-[4.5rem]" />
          <Form {...form}>
            <h2 className="text-xl font-semibold text-accent text-center">
              Solicitați o ofertă
            </h2>
            <form
              className="mt-4 space-y-2 xs:space-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Nume si Prenume */}
                <div>
                  <FormField
                    control={form.control}
                    name="nume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="nume">Nume</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Numele dvs. aici"
                            type="name"
                            id="nume"
                            autoComplete="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red" />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="prenume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="prenume">Prenume</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Numele dvs. aici"
                            type="name"
                            id="prenume"
                            autoComplete="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="exemplu@gmail.com"
                            type="email"
                            id="email"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red" />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Tel */}
                <div>
                  <FormField
                    control={form.control}
                    name="telefon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="telefon">Telefon</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Telefonul dvs. aici"
                            type="tel"
                            id="telefon"
                            autoComplete="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {/* Intrebarea 1 */}
              <div>
                <FormField
                  control={form.control}
                  name="constructie"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="constructie">
                        Ce doriți să construiți?
                      </FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        selectedValue={field.value}
                        id="constructie"
                        name="constructie"
                      >
                        <FormControl>
                          <SelectTrigger id="constructie">
                            <SelectValue placeholder="Selectati" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent position="popper">
                          <SelectItem value="Construcții Civile - Parter">
                            Construcții Civile
                          </SelectItem>
                          <SelectItem value="Construcții Industriale/Agricole">
                            Construcții Industriale/Agricole
                          </SelectItem>
                          <SelectItem value="Consultantă/Diriginte De Șantier">
                            Consultantă/Diriginte De Șantier
                          </SelectItem>
                          <SelectItem value="Management de proiect">
                            Management de proiect
                          </SelectItem>
                          <SelectItem value="Altceva">Altceva</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
              </div>
              {/* Intrebarea 2 */}
              <div>
                <FormField
                  control={form.control}
                  name="judet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="judet">
                        În ce județ va fi construcția?
                      </FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        selectedValue={field.value}
                        id="judet"
                        name="judet"
                      >
                        <FormControl>
                          <SelectTrigger id="judet">
                            <SelectValue placeholder="Selectati" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent position="popper">
                          <SelectItem name="judet" value="București">
                            București
                          </SelectItem>
                          <SelectItem value="Ilfov">Ilfov</SelectItem>
                          <SelectItem value="Alba">Alba</SelectItem>
                          <SelectItem value="Arad">Arad</SelectItem>
                          <SelectItem value="Argeș">Argeș</SelectItem>
                          <SelectItem value="Bacău">Bacău</SelectItem>
                          <SelectItem value="Bihor">Bihor</SelectItem>
                          <SelectItem value="Bistrița-Năsăud">
                            Bistrița-Năsăud
                          </SelectItem>
                          <SelectItem value="Botoșani">Botoșani</SelectItem>
                          <SelectItem value="Brăila">Brăila</SelectItem>
                          <SelectItem value="Brașov">Brașov</SelectItem>
                          <SelectItem value="Buzău">Buzău</SelectItem>
                          <SelectItem value="Călărași">Călărași</SelectItem>
                          <SelectItem value="Caraș-Severin">
                            Caraș-Severin
                          </SelectItem>
                          <SelectItem value="Cluj">Cluj</SelectItem>
                          <SelectItem value="Constanța">Constanța</SelectItem>
                          <SelectItem value="Covasna">Covasna</SelectItem>
                          <SelectItem value="Dâmbovița">Dâmbovița</SelectItem>
                          <SelectItem value="Dolj">Dolj</SelectItem>
                          <SelectItem value="Galați">Galați</SelectItem>
                          <SelectItem value="Giurgiu">Giurgiu</SelectItem>
                          <SelectItem value="Gorj">Gorj</SelectItem>
                          <SelectItem value="Harghita">Harghita</SelectItem>
                          <SelectItem value="Hunedoara">Hunedoara</SelectItem>
                          <SelectItem value="Ialomița">Ialomița</SelectItem>
                          <SelectItem value="Iași">Iași</SelectItem>
                          <SelectItem value="Maramureș">Maramureș</SelectItem>
                          <SelectItem value="Mehedinți">Mehedinți</SelectItem>
                          <SelectItem value="Mureș">Mureș</SelectItem>
                          <SelectItem value="Neamț">Neamț</SelectItem>
                          <SelectItem value="Olt">Olt</SelectItem>
                          <SelectItem value="Prahova">Prahova</SelectItem>
                          <SelectItem value="Sălaj">Sălaj</SelectItem>
                          <SelectItem value="Satu Mare">Satu Mare</SelectItem>
                          <SelectItem value="Sibiu">Sibiu</SelectItem>
                          <SelectItem value="Suceava">Suceava</SelectItem>
                          <SelectItem value="Teleorman">Teleorman</SelectItem>
                          <SelectItem value="Timiș">Timiș</SelectItem>
                          <SelectItem value="Tulcea">Tulcea</SelectItem>
                          <SelectItem value="Vaslui">Vaslui</SelectItem>
                          <SelectItem value="Vâlcea">Vâlcea</SelectItem>
                          <SelectItem value="Vrancea">Vrancea</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
              </div>
              {/* Intrebarea 3 */}
              <div>
                <FormField
                  control={form.control}
                  name="inceput"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="inceput">
                        Când v-ați dori să începeți construcția?
                      </FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        selectedValue={field.value}
                        id="inceput"
                        name="inceput"
                      >
                        <FormControl>
                          <SelectTrigger id="inceput">
                            <SelectValue placeholder="Selectati" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent position="popper">
                          <SelectItem name="inceput" value="Cât mai repede">
                            Cât mai repede
                          </SelectItem>
                          <SelectItem value="În următoarele 6 luni">
                            În următoarele 6 luni
                          </SelectItem>
                          <SelectItem value="Nu m-am hotărât încă">
                            Nu m-am hotărât încă
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="mesaj"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="mesaj">Mesaj</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Introduceți mesajul aici."
                          id="mesaj"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-right flex gap-x-4">
                <Button type="submit" variant="orange" size="full">
                  Trimite
                </Button>

                <DrawerClose asChild>
                  <Button variant="orange" size="full" onClick={onClose}>
                    Închide
                  </Button>
                </DrawerClose>
              </div>
            </form>
          </Form>
          <p className="leading-normal text-xs text-center mt-2">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-accent underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              className="text-accent underline"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </GoogleCaptchaWrapper>
    </>
  );
}

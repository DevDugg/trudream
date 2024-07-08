'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ZodType, z } from 'zod';
import { supabase } from '@/lib/supabaseClient';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoaderLogo from '@/components/animations/loader-logo';
import { PhoneInput } from './phone-input';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import validator from 'validator';
import { zodResolver } from '@hookform/resolvers/zod';

export type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export type ValidFieldNames = keyof FormData;

const HeroForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const formSchema: ZodType<FormData> = z.object({
    email: z.string().email({ message: 'Please enter a valid Discord username or email' }),
    first_name: z.string().min(1, { message: 'First name is required' }),
    last_name: z.string().min(1, { message: 'First name is required' }),
    phone: z.string().refine(validator.isMobilePhone, {
      message: 'Please enter a valid phone number',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (isLoading) return;
    setIsLoading(true);

    const res = await fetch('/src/api/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, phone }),
    });

    const userData = await res.json();

    if (!res.ok) {
      console.error('Error');
      setIsLoading(false);
      toast({
        title: 'Error',
        description: 'An error occurred while submitting the form. Please try again later.',
      });
    } else {
      setIsLoading(false);
      toast({
        title: 'Success',
        description: 'Form has been submitted successfully.',
      });
    }

    // if (error) {
    //   console.error('Error:', error);
    //   setIsLoading(false);
    //   toast({
    //     title: 'Error',
    //     description: 'An error occurred while submitting the form. Please try again later.',
    //   });
    // } else {
    //   setIsLoading(false);
    //   toast({
    //     title: 'Success',
    //     description: 'Form has been submitted successfully.',
    //   });
    }

    // const response = await fetch("api/users", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (
    //   response === undefined ||
    //   response.status !== 200 ||
    //   !response.ok ||
    //   !response.ok.toString()
    // ) {
    //   setIsLoading(false);
    //   return toast({
    //     title: "Error",
    //     description:
    //       "An error occurred while submitting the form. Please try again later.",
    //   });
    // }
    // setIsLoading(false);
    // toast({
    //   title: "Success",
    //   description: "Form has been submitted successfully.",
    // });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 bg-WHITE rounded-2xl border border-GRAY p-4 max-w-[480px] relative sm:mx-auto">
        <motion.div
          className="absolute top-0 left-0 size-full bg-WHITE rounded-2xl flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0.6 : 0 }}
          style={{ pointerEvents: isLoading ? 'all' : 'none' }}>
          <LoaderLogo />
        </motion.div>
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your first name?*</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Pietro" />
              </FormControl>
              <FormDescription>Please enter your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your last name?*</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Schirano" />
              </FormControl>
              <FormDescription>Please enter your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the best email to follow up with you?*</FormLabel>
              <FormControl>
                <Input {...field} placeholder="mail@skirano.co" />
              </FormControl>
              <FormDescription>Please enter your emal.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the best number for your funding advisor to reach you?*</FormLabel>
              <FormControl>
                <PhoneInput defaultCountry="US" {...field} placeholder="Enter your phone number" />
              </FormControl>
              <FormDescription>Please enter your phone number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Get pre-approved</Button>
      </form>
      {/* <button onClick={() => toast({ title: "Clicked", description: "Clicked" })}>Click me</button> */}
    </Form>
  );
};
export default HeroForm;

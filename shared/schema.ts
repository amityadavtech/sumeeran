import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribed: boolean("subscribed").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBookingSchema = createInsertSchema(bookings).pick({
  name: true,
  email: true,
  phone: true,
  service: true,
  date: true,
  time: true,
  message: true,
}).extend({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  message: true,
}).extend({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  email: true,
}).extend({
  email: z.string().email("Invalid email address"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

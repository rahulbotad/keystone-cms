import fs from "fs";
import path from "path";
import { type Context } from ".keystone/types";

const seedUsers = async (context: Context) => {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(
    path.join(process.cwd(), "./src/seed/users.json"),
    "utf-8"
  );
  const seedUsers: any[] = JSON.parse(rawJSONData);
  const usersAlreadyInDatabase = await db.User.findMany({
    where: {
      email: { in: seedUsers.map((user) => user.email) },
    },
  });
  const usersToCreate = seedUsers.filter(
    (seedUser) =>
      !usersAlreadyInDatabase.some((u) => u.email === seedUser.email)
  );
  await db.User.createMany({
    data: usersToCreate,
  });
};

// seed posts and connect with users
const seedPosts = async (context: Context) => {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(
    path.join(process.cwd(), "./src/seed/posts.json"),
    "utf-8"
  );
  const seedPosts: any[] = JSON.parse(rawJSONData);
  const postsAlreadyInDatabase = await db.Post.findMany({
    where: {
      slug: { in: seedPosts.map((post) => post.slug) },
    },
  });
  const postsToCreate = seedPosts.filter(
    (seedPost) => !postsAlreadyInDatabase.some((p) => p.slug === seedPost.slug)
  );
  await db.Post.createMany({
    data: postsToCreate.map((p) => ({ ...p, content: p?.content?.document })),
  });
};

const seedProjects = async (context: Context) => {
  const { db } = context.sudo();
  const rawJSONData = fs.readFileSync(
    path.join(process.cwd(), "./src/seed/projects.json"),
    "utf-8"
  );
  const seedProjects: any[] = JSON.parse(rawJSONData);
  const projectsAlreadyInDatabase = await db.Project.findMany({
    where: {
      name: { in: seedProjects.map((project) => project.name) },
    },
  });
  const projectsToCreate = seedProjects.filter(
    (seedProject) =>
      !projectsAlreadyInDatabase.some((p) => p.name === seedProject.name)
  );
  await db.Project.createMany({
    data: projectsToCreate.map((p) => ({ ...p, isActive: p?.isActive })),
  });
};

export const seedDatabase = async (context: Context) => {
  console.log(`🌱 Seeding database...`);
  await seedUsers(context);
  await seedPosts(context);
  await seedProjects(context);
  console.log(`🌱 Seeding database completed.`);
};

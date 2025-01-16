---
title: 时间归档
sidebar: auto
---

<script setup>
import { data as posts } from './posts.data.js'

// 按年月组织文章
const archives = {}
posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  .forEach(post => {
    const date = new Date(post.frontmatter.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    if (!archives[year]) archives[year] = {}
    if (!archives[year][month]) archives[year][month] = []
    archives[year][month].push(post)
  })
</script>

# 时间归档

<div v-for="(months, year) in archives" :key="year">
  <h2>{{ year }}</h2>
  <div v-for="(posts, month) in months" :key="month">
    <h3>{{ month }}月</h3>
    <ul>
      <li v-for="post in posts" :key="post.url">
        <a :href="post.url">{{ post.frontmatter.title }}</a>
      </li>
    </ul>
  </div>
</div>
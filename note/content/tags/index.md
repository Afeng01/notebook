---
title: 标签导航
sidebar: auto
---

<script setup>
import { data as posts } from './posts.data.js'

// 收集所有标签
const tags = {}
posts.forEach(post => {
  if (post.frontmatter.tags) {
    post.frontmatter.tags.forEach(tag => {
      if (!tags[tag]) tags[tag] = []
      tags[tag].push(post)
    })
  }
})
</script>

# 标签导航

<div v-for="(posts, tag) in tags" :key="tag">
  <h2>{{ tag }}</h2>
  <ul>
    <li v-for="post in posts" :key="post.url">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
    </li>
  </ul>
</div>
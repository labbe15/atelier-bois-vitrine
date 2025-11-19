import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'realisation',
  title: 'Réalisation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du projet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Structure', value: 'Structure'},
          {title: 'Menuiserie Intérieure', value: 'Menuiserie Intérieure'},
          {title: 'Menuiserie Extérieure', value: 'Menuiserie Extérieure'},
          {title: 'Agencement', value: 'Agencement'},
          {title: 'Extension', value: 'Extension'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Localisation',
      type: 'string',
      placeholder: 'Ex: Aurillac, Cantal',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie d\'images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'featured',
      title: 'Projet mis en avant',
      type: 'boolean',
      description: 'Afficher ce projet en premier dans la galerie',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, category} = selection
      return {
        ...selection,
        subtitle: category,
      }
    },
  },
})

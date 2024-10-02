PGDMP  .    5            	    |         
   webTime_pg    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16565 
   webTime_pg    DATABASE     �   CREATE DATABASE "webTime_pg" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Bolivia.1252';
    DROP DATABASE "webTime_pg";
                postgres    false            �           0    0    DATABASE "webTime_pg"    COMMENT     5   COMMENT ON DATABASE "webTime_pg" IS 'bd de webTime';
                   postgres    false    4808            �            1259    16583    autor    TABLE     m   CREATE TABLE public.autor (
    "codAutor" integer NOT NULL,
    "nombreAutor" character varying NOT NULL
);
    DROP TABLE public.autor;
       public         heap    postgres    false            �            1259    16595 	   categoria    TABLE     y   CREATE TABLE public.categoria (
    "codCategoria" integer NOT NULL,
    "nombreCategoria" character varying NOT NULL
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    16573    idioma    TABLE     z   CREATE TABLE public.idioma (
    "codIdioma" character varying(10) NOT NULL,
    idioma character varying(50) NOT NULL
);
    DROP TABLE public.idioma;
       public         heap    postgres    false            �            1259    16566    libro    TABLE     �  CREATE TABLE public.libro (
    "codLibro" integer NOT NULL,
    "nombreLibro" character varying(100) NOT NULL,
    sinopsis character varying(1000) NOT NULL,
    "enlaceLibro" character varying(200),
    "enlaceAudio" character varying(200),
    "enlacePortada" character varying(200),
    "codIdioma" character varying(10) NOT NULL,
    "codAutor" integer NOT NULL,
    "codCategoria" integer NOT NULL
);
    DROP TABLE public.libro;
       public         heap    postgres    false            �          0    16583    autor 
   TABLE DATA           :   COPY public.autor ("codAutor", "nombreAutor") FROM stdin;
    public          postgres    false    217   '       �          0    16595 	   categoria 
   TABLE DATA           F   COPY public.categoria ("codCategoria", "nombreCategoria") FROM stdin;
    public          postgres    false    218   D       �          0    16573    idioma 
   TABLE DATA           5   COPY public.idioma ("codIdioma", idioma) FROM stdin;
    public          postgres    false    216   a       �          0    16566    libro 
   TABLE DATA           �   COPY public.libro ("codLibro", "nombreLibro", sinopsis, "enlaceLibro", "enlaceAudio", "enlacePortada", "codIdioma", "codAutor", "codCategoria") FROM stdin;
    public          postgres    false    215   ~       &           2606    16572    libro LIBRO_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "LIBRO_pkey" PRIMARY KEY ("codLibro");
 <   ALTER TABLE ONLY public.libro DROP CONSTRAINT "LIBRO_pkey";
       public            postgres    false    215            *           2606    16589    autor autor_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY ("codAutor");
 :   ALTER TABLE ONLY public.autor DROP CONSTRAINT autor_pkey;
       public            postgres    false    217            ,           2606    16601    categoria categoria_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY ("codCategoria");
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public            postgres    false    218            (           2606    16577    idioma idioma_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.idioma
    ADD CONSTRAINT idioma_pkey PRIMARY KEY ("codIdioma");
 <   ALTER TABLE ONLY public.idioma DROP CONSTRAINT idioma_pkey;
       public            postgres    false    216            -           2606    16590    libro fk_codAutor    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codAutor" FOREIGN KEY ("codAutor") REFERENCES public.autor("codAutor") NOT VALID;
 =   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codAutor";
       public          postgres    false    217    4650    215            .           2606    16602    libro fk_codCategoria    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codCategoria" FOREIGN KEY ("codCategoria") REFERENCES public.categoria("codCategoria") NOT VALID;
 A   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codCategoria";
       public          postgres    false    218    215    4652            /           2606    16578    libro fk_codIdioma    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codIdioma" FOREIGN KEY ("codIdioma") REFERENCES public.idioma("codIdioma") NOT VALID;
 >   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codIdioma";
       public          postgres    false    216    4648    215            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     
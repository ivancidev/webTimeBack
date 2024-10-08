PGDMP                  	    |            postgres    16.4    16.4 -               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE     }   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Bolivia.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    4887                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24588    archivos    TABLE     �  CREATE TABLE public.archivos (
    id integer NOT NULL,
    tipo_archivo character varying(50) NOT NULL,
    url_archivo text NOT NULL,
    tamano_archivo bigint,
    formato character varying(50),
    fecha_carga timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT tipo_archivo_valido CHECK (((tipo_archivo)::text = ANY ((ARRAY['pdf'::character varying, 'audio'::character varying, 'portada'::character varying])::text[])))
);
    DROP TABLE public.archivos;
       public         heap    postgres    false            �            1259    24587    archivos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.archivos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.archivos_id_seq;
       public          postgres    false    225                       0    0    archivos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.archivos_id_seq OWNED BY public.archivos.id;
          public          postgres    false    224            �            1259    16399    autor    TABLE     m   CREATE TABLE public.autor (
    "codAutor" integer NOT NULL,
    "nombreAutor" character varying NOT NULL
);
    DROP TABLE public.autor;
       public         heap    postgres    false            �            1259    16404    autor_codautor_seq    SEQUENCE     {   CREATE SEQUENCE public.autor_codautor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.autor_codautor_seq;
       public          postgres    false    216                       0    0    autor_codautor_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.autor_codautor_seq OWNED BY public.autor."codAutor";
          public          postgres    false    217            �            1259    16405 	   categoria    TABLE     y   CREATE TABLE public.categoria (
    "codCategoria" integer NOT NULL,
    "nombreCategoria" character varying NOT NULL
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    16410    categoria_codcategoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_codcategoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categoria_codcategoria_seq;
       public          postgres    false    218                       0    0    categoria_codcategoria_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categoria_codcategoria_seq OWNED BY public.categoria."codCategoria";
          public          postgres    false    219            �            1259    16411    idioma    TABLE     z   CREATE TABLE public.idioma (
    "codIdioma" character varying(10) NOT NULL,
    idioma character varying(50) NOT NULL
);
    DROP TABLE public.idioma;
       public         heap    postgres    false            �            1259    16414    idioma_codidioma_seq    SEQUENCE     }   CREATE SEQUENCE public.idioma_codidioma_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.idioma_codidioma_seq;
       public          postgres    false    220                       0    0    idioma_codidioma_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.idioma_codidioma_seq OWNED BY public.idioma."codIdioma";
          public          postgres    false    221            �            1259    16415    libro    TABLE     �  CREATE TABLE public.libro (
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
       public         heap    postgres    false            �            1259    16420    libro_codlibro_seq    SEQUENCE     {   CREATE SEQUENCE public.libro_codlibro_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.libro_codlibro_seq;
       public          postgres    false    222                       0    0    libro_codlibro_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.libro_codlibro_seq OWNED BY public.libro."codLibro";
          public          postgres    false    223            i           2604    24591    archivos id    DEFAULT     j   ALTER TABLE ONLY public.archivos ALTER COLUMN id SET DEFAULT nextval('public.archivos_id_seq'::regclass);
 :   ALTER TABLE public.archivos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            e           2604    16421    autor codAutor    DEFAULT     r   ALTER TABLE ONLY public.autor ALTER COLUMN "codAutor" SET DEFAULT nextval('public.autor_codautor_seq'::regclass);
 ?   ALTER TABLE public.autor ALTER COLUMN "codAutor" DROP DEFAULT;
       public          postgres    false    217    216            f           2604    16422    categoria codCategoria    DEFAULT     �   ALTER TABLE ONLY public.categoria ALTER COLUMN "codCategoria" SET DEFAULT nextval('public.categoria_codcategoria_seq'::regclass);
 G   ALTER TABLE public.categoria ALTER COLUMN "codCategoria" DROP DEFAULT;
       public          postgres    false    219    218            g           2604    16423    idioma codIdioma    DEFAULT     v   ALTER TABLE ONLY public.idioma ALTER COLUMN "codIdioma" SET DEFAULT nextval('public.idioma_codidioma_seq'::regclass);
 A   ALTER TABLE public.idioma ALTER COLUMN "codIdioma" DROP DEFAULT;
       public          postgres    false    221    220            h           2604    16424    libro codLibro    DEFAULT     r   ALTER TABLE ONLY public.libro ALTER COLUMN "codLibro" SET DEFAULT nextval('public.libro_codlibro_seq'::regclass);
 ?   ALTER TABLE public.libro ALTER COLUMN "codLibro" DROP DEFAULT;
       public          postgres    false    223    222                      0    24588    archivos 
   TABLE DATA           g   COPY public.archivos (id, tipo_archivo, url_archivo, tamano_archivo, formato, fecha_carga) FROM stdin;
    public          postgres    false    225   �1                 0    16399    autor 
   TABLE DATA           :   COPY public.autor ("codAutor", "nombreAutor") FROM stdin;
    public          postgres    false    216   2       
          0    16405 	   categoria 
   TABLE DATA           F   COPY public.categoria ("codCategoria", "nombreCategoria") FROM stdin;
    public          postgres    false    218   *2                 0    16411    idioma 
   TABLE DATA           5   COPY public.idioma ("codIdioma", idioma) FROM stdin;
    public          postgres    false    220   G2                 0    16415    libro 
   TABLE DATA           �   COPY public.libro ("codLibro", "nombreLibro", sinopsis, "enlaceLibro", "enlaceAudio", "enlacePortada", "codIdioma", "codAutor", "codCategoria") FROM stdin;
    public          postgres    false    222   d2                  0    0    archivos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.archivos_id_seq', 1, false);
          public          postgres    false    224                        0    0    autor_codautor_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.autor_codautor_seq', 2, true);
          public          postgres    false    217            !           0    0    categoria_codcategoria_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categoria_codcategoria_seq', 1, false);
          public          postgres    false    219            "           0    0    idioma_codidioma_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.idioma_codidioma_seq', 1, false);
          public          postgres    false    221            #           0    0    libro_codlibro_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.libro_codlibro_seq', 1, false);
          public          postgres    false    223            s           2606    16426    libro LIBRO_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "LIBRO_pkey" PRIMARY KEY ("codLibro");
 <   ALTER TABLE ONLY public.libro DROP CONSTRAINT "LIBRO_pkey";
       public            postgres    false    222            u           2606    24597    archivos archivos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.archivos
    ADD CONSTRAINT archivos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.archivos DROP CONSTRAINT archivos_pkey;
       public            postgres    false    225            m           2606    16428    autor autor_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY ("codAutor");
 :   ALTER TABLE ONLY public.autor DROP CONSTRAINT autor_pkey;
       public            postgres    false    216            o           2606    16430    categoria categoria_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY ("codCategoria");
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public            postgres    false    218            q           2606    16432    idioma idioma_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.idioma
    ADD CONSTRAINT idioma_pkey PRIMARY KEY ("codIdioma");
 <   ALTER TABLE ONLY public.idioma DROP CONSTRAINT idioma_pkey;
       public            postgres    false    220            v           2606    16433    libro fk_codAutor    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codAutor" FOREIGN KEY ("codAutor") REFERENCES public.autor("codAutor") NOT VALID;
 =   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codAutor";
       public          postgres    false    216    222    4717            w           2606    16438    libro fk_codCategoria    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codCategoria" FOREIGN KEY ("codCategoria") REFERENCES public.categoria("codCategoria") NOT VALID;
 A   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codCategoria";
       public          postgres    false    222    4719    218            x           2606    16443    libro fk_codIdioma    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codIdioma" FOREIGN KEY ("codIdioma") REFERENCES public.idioma("codIdioma") NOT VALID;
 >   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codIdioma";
       public          postgres    false    4721    220    222                  x������ � �            x������ � �      
      x������ � �            x������ � �            x������ � �     